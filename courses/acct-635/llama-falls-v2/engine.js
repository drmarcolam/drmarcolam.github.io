/* ACCT 635 Llama Falls V2: shared case engine. Data-driven: window.CASE holds funds, chart of accounts,
   transactions, the answer key and checkpoints. Fixed figures. Answers stay in the student's browser. */
(function () {
"use strict";
var C = window.CASE, SK = "acct635-v2-" + C.id;
var $ = function (s, r) { return (r || document).querySelector(s); };
function h(tag, attrs, kids) {
  var e = document.createElement(tag);
  for (var k in (attrs || {})) {
    if (k === "text") e.textContent = attrs[k];
    else if (k === "class") e.className = attrs[k];
    else e.setAttribute(k, attrs[k]);
  }
  (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
  return e;
}
function num(s) { var v = String(s == null ? "" : s).replace(/[$,\s]/g, ""); if (v === "") return 0; var n = parseFloat(v); return isNaN(n) ? 0 : n; }
function fmt(n) { n = Math.round(n); return n === 0 ? "" : Math.abs(n).toLocaleString("en-US"); }
function money(n) { var s = Math.abs(Math.round(n)).toLocaleString("en-US"); return (n < 0 ? "($" + s + ")" : "$" + s); }

/* ---------- state ---------- */
var st;
try { st = JSON.parse(localStorage.getItem(SK) || "null"); } catch (e) { st = null; }
if (!st) st = { name: "", sid: "", e: {}, cp: {} };
function save() { try { localStorage.setItem(SK, JSON.stringify(st)); } catch (e) {} }
function ek(f, g, id) { return f.key + "|" + g + "|" + id; }
function entryState(f, g, ent) {
  var k = ek(f, g, ent.id);
  if (!st.e[k]) {
    var n = Math.max(3, ent.lines.length + 1), rows = [];
    for (var i = 0; i < n; i++) rows.push({ a: "", d: "", c: "" });
    st.e[k] = { rows: rows, checked: false, ok: false, rev: false };
  }
  return st.e[k];
}

/* ---------- grading ---------- */
function sideOf(l) { return l.dr > 0 ? "dr" : "cr"; }
function grade(rows, key) {
  var stu = [], i;
  rows.forEach(function (r, idx) {
    var d = num(r.d), c = num(r.c);
    if (r.a || d || c) stu.push({ i: idx, a: r.a, d: d, c: c, side: (d > 0 && c > 0) ? "both" : d > 0 ? "dr" : c > 0 ? "cr" : "none" });
  });
  var used = {}, marks = {}, matched = 0, td = 0, tc = 0;
  stu.forEach(function (s) {
    td += s.d; tc += s.c;
    if (s.side !== "dr" && s.side !== "cr") return;
    for (i = 0; i < key.length; i++) {
      if (used[i]) continue;
      var kl = key[i], amt = sideOf(kl) === "dr" ? kl.dr : kl.cr;
      if (kl.a === s.a && sideOf(kl) === s.side && Math.abs(amt - (s.side === "dr" ? s.d : s.c)) <= 1) { used[i] = 1; marks[s.i] = true; matched++; break; }
    }
  });
  return { stu: stu, marks: marks, matched: matched, ok: matched === key.length && stu.length === key.length, balanced: Math.abs(td - tc) < 0.5, td: td, tc: tc };
}

/* ---------- trial balance ---------- */
function compute(f) {
  var bal = {}, rec = {};
  f.coa.forEach(function (a) { rec[a.a] = { bd: a.bd, bc: a.bc, jd: 0, jc: 0, ad: 0, ac: 0, cd: 0, cc: 0 }; });
  function post(group, g, dk, ck) {
    f[g].forEach(function (ent) {
      (entryState(f, group, ent).rows).forEach(function (r) {
        if (!r.a || !rec[r.a]) return;
        rec[r.a][dk] += num(r.d); rec[r.a][ck] += num(r.c);
      });
    });
  }
  post("j", "journal", "jd", "jc"); post("a", "adjust", "ad", "ac"); post("c", "closing", "cd", "cc");
  var out = {};
  f.coa.forEach(function (a) {
    var r = rec[a.a], adj = r.bd - r.bc + r.jd - r.jc + r.ad - r.ac, post = adj + r.cd - r.cc;
    out[a.a] = { r: r, adj: adj, post: post };
  });
  return out;
}
function cpValue(f, cp, tb) {
  var sp = cp.spec, v = 0, k;
  if (sp.t === "fb") { for (k in tb) if (k.indexOf("Fund Balance") === 0) v += -tb[k].post; return v; }
  if (sp.t === "acct") { var x = tb[sp.a] ? tb[sp.a].adj : 0; return sp.side === "dr" ? x : -x; }
  for (k in tb) if (k.indexOf(sp.p) === 0) v += tb[k].adj;
  return sp.side === "dr" ? v : -v;
}

/* ---------- rendering ---------- */
var app = $("#app"), scoreHost = $("#scorePanel");
var entryEls = {};

function buildEntry(f, g, ent, txt, label) {
  var key = ek(f, g, ent.id), s = entryState(f, g, ent);
  var card = h("div", { "class": "entry", id: "e-" + key.replace(/\W/g, "-") });
  card.appendChild(h("h4", { "class": "entry-h", text: label }));
  card.appendChild(h("p", { "class": "entry-txt", text: txt }));
  var tbl = h("table", { "class": "grid" }), cap = h("caption", { "class": "sr-only", text: "Journal entry lines for " + label });
  tbl.appendChild(cap);
  tbl.appendChild(h("thead", {}, [h("tr", {}, [h("th", { scope: "col", text: "Account" }), h("th", { scope: "col", text: "Debit ($)" }), h("th", { scope: "col", text: "Credit ($)" }), h("th", { scope: "col", text: "Check" })])]));
  var tb = h("tbody"); tbl.appendChild(tb);
  var res = h("div", { "class": "entry-res", role: "status", "aria-live": "polite" });
  var model = h("div", { "class": "model", hidden: "" });

  function rowEl(r, idx) {
    var sel = h("select", { "aria-label": ent.id + " line " + (idx + 1) + " account" });
    sel.appendChild(h("option", { value: "", text: "Choose an account" }));
    f.coa.forEach(function (a) { sel.appendChild(h("option", { value: a.a, text: a.a })); });
    sel.value = r.a;
    var d = h("input", { type: "text", inputmode: "numeric", autocomplete: "off", "aria-label": ent.id + " line " + (idx + 1) + " debit", value: r.d });
    var c = h("input", { type: "text", inputmode: "numeric", autocomplete: "off", "aria-label": ent.id + " line " + (idx + 1) + " credit", value: r.c });
    var mk = h("span", { "class": "mark" });
    function upd() { r.a = sel.value; r.d = d.value; r.c = c.value; stale(); }
    sel.addEventListener("change", upd); d.addEventListener("input", upd); c.addEventListener("input", upd);
    var tr = h("tr", {}, [h("td", {}, [sel]), h("td", {}, [d]), h("td", {}, [c]), h("td", {}, [mk])]);
    tr._mk = mk; return tr;
  }
  function draw() { tb.textContent = ""; s.rows.forEach(function (r, i) { tb.appendChild(rowEl(r, i)); }); }
  function stale() {
    if (s.checked) { s.checked = false; s.ok = false; res.textContent = "You changed this entry. Check it again to score it."; res.className = "entry-res"; Array.prototype.forEach.call(tb.children, function (tr) { tr.className = ""; tr._mk.textContent = ""; }); }
    save(); refresh();
  }
  function check() {
    if (s.rev) { res.textContent = "Model entry shown. This entry earns no points."; return; }
    var g1 = grade(s.rows, ent.lines); s.checked = true; s.ok = g1.ok; s.ts = new Date().toISOString();
    Array.prototype.forEach.call(tb.children, function (tr, i) {
      var r = s.rows[i], has = r.a || num(r.d) || num(r.c);
      tr.className = !has ? "" : (g1.marks[i] ? "ok" : "bad"); tr._mk.textContent = !has ? "" : (g1.marks[i] ? "✓ matches" : "✗ check this line");
    });
    var msg;
    if (g1.ok) msg = "Correct. 1 point.";
    else if (!g1.stu.length) msg = "No lines entered yet.";
    else {
      msg = g1.matched + " of " + ent.lines.length + " lines match.";
      if (g1.stu.length > ent.lines.length) msg += " You entered more lines than needed.";
      else if (g1.matched < ent.lines.length) msg += " At least one line is missing or wrong.";
      msg += g1.balanced ? "" : " Debits and credits are not equal.";
    }
    res.textContent = msg; res.className = "entry-res " + (g1.ok ? "good" : "badmsg");
    save(); refresh();
  }
  function reveal() {
    s.rev = true; s.ok = false; model.hidden = false; model.textContent = "";
    model.appendChild(h("p", { "class": "model-note", text: "Model entry (no points for this entry once shown):" }));
    var t = h("table", { "class": "grid mini" });
    t.appendChild(h("thead", {}, [h("tr", {}, [h("th", { scope: "col", text: "Account" }), h("th", { scope: "col", text: "Debit" }), h("th", { scope: "col", text: "Credit" })])]));
    var b = h("tbody");
    ent.lines.forEach(function (l) { b.appendChild(h("tr", {}, [h("td", { text: l.a }), h("td", { text: fmt(l.dr) }), h("td", { text: fmt(l.cr) })])); });
    t.appendChild(b); model.appendChild(t);
    res.textContent = "Model entry shown. This entry earns no points."; res.className = "entry-res"; save(); refresh();
  }
  var addB = h("button", { type: "button", "class": "secondary", text: "Add line" });
  addB.addEventListener("click", function () { s.rows.push({ a: "", d: "", c: "" }); save(); draw(); });
  var chB = h("button", { type: "button", text: "Check entry" }); chB.addEventListener("click", check);
  var rvB = h("button", { type: "button", "class": "secondary", text: "Show model entry" }); rvB.addEventListener("click", reveal);
  card.appendChild(tbl);
  card.appendChild(h("div", { "class": "btn-row" }, [addB, chB, rvB]));
  card.appendChild(res); card.appendChild(model);
  draw();
  if (s.rev) { reveal(); } else if (s.checked) { /* re-mark */ var g2 = grade(s.rows, ent.lines); Array.prototype.forEach.call(tb.children, function (tr, i) { var r = s.rows[i], has = r.a || num(r.d) || num(r.c); tr.className = !has ? "" : (g2.marks[i] ? "ok" : "bad"); tr._mk.textContent = !has ? "" : (g2.marks[i] ? "✓ matches" : "✗ check this line"); }); res.textContent = s.ok ? "Correct. 1 point." : "Checked. Not yet correct."; res.className = "entry-res " + (s.ok ? "good" : "badmsg"); }
  card._check = check;
  entryEls[key] = card;
  return card;
}

function buildTB(f, host) {
  host.textContent = "";
  var tb = compute(f), t = h("table", { "class": "tb" });
  t.appendChild(h("caption", { text: f.name + ": adjusted trial balance (updates as you enter)" }));
  t.appendChild(h("thead", {}, [h("tr", {}, ["Account", "Beginning Dr", "Beginning Cr", "Entries Dr", "Entries Cr", "Adjustments Dr", "Adjustments Cr", "Adjusted Dr", "Adjusted Cr"].map(function (x) { return h("th", { scope: "col", text: x }); }))]));
  var b = h("tbody"), T = [0, 0, 0, 0, 0, 0, 0, 0];
  f.coa.forEach(function (a) {
    var r = tb[a.a].r, adj = tb[a.a].adj, v = [r.bd, r.bc, r.jd, r.jc, r.ad, r.ac, adj > 0 ? adj : 0, adj < 0 ? -adj : 0];
    if (v.every(function (x) { return Math.abs(x) < 0.5; })) return;
    v.forEach(function (x, i) { T[i] += x; });
    b.appendChild(h("tr", {}, [h("th", { scope: "row", text: a.a })].concat(v.map(function (x) { return h("td", { "class": "n", text: fmt(x) }); }))));
  });
  b.appendChild(h("tr", { "class": "tot" }, [h("th", { scope: "row", text: "Totals" })].concat(T.map(function (x) { return h("td", { "class": "n", text: fmt(x) || "0" }); }))));
  t.appendChild(b);
  var w = h("div", { "class": "scroll", role: "region", "aria-label": f.name + " adjusted trial balance", tabindex: "0" }, [t]);
  host.appendChild(w);
  var bal = Math.abs(T[6] - T[7]) < 0.5 && Math.abs(T[0] - T[1]) < 0.5 && Math.abs(T[2] - T[3]) < 0.5 && Math.abs(T[4] - T[5]) < 0.5;
  host.appendChild(h("p", { "class": "hint-line", text: bal ? "Every column is in balance." : "At least one column is out of balance. Check your entries." }));
}

function buildCheckpoints(f, host) {
  host.textContent = "";
  var tb = compute(f);
  f.checkpoints.forEach(function (cp, i) {
    var k = f.key + "|" + i, val = cpValue(f, cp, tb), ok = st.cp[k] === true;
    var row = h("div", { "class": "cp" });
    row.appendChild(h("span", { "class": "cp-l", text: cp.label }));
    row.appendChild(h("span", { "class": "cp-v", text: "Your amount: " + money(val) }));
    var res = h("span", { "class": "cp-r", role: "status", "aria-live": "polite", text: ok ? "✓ matches the checkpoint" : "" });
    var b = h("button", { type: "button", "class": "secondary", text: "Check" });
    b.addEventListener("click", function () {
      var v = cpValue(f, cp, compute(f)), good = Math.abs(v - cp.v) <= 1;
      st.cp[k] = good; save(); res.textContent = good ? "✓ matches the checkpoint" : "✗ does not match. Recheck your entries and adjusted trial balance."; res.className = "cp-r " + (good ? "good" : "badmsg"); refresh();
    });
    row.appendChild(b); row.appendChild(res); host.appendChild(row);
  });
}

function fundScore(f) {
  var pts = 0, tot = 0;
  [["j", "journal"], ["a", "adjust"], ["c", "closing"]].forEach(function (p) { f[p[1]].forEach(function (e) { tot++; var s = st.e[ek(f, p[0], e.id)]; if (s && s.ok && !s.rev) pts++; }); });
  f.checkpoints.forEach(function (c, i) { tot++; if (st.cp[f.key + "|" + i] === true) pts++; });
  return [pts, tot];
}
var tbHosts = {}, cpHosts = {};
function refresh() {
  var P = 0, T = 0, rows = [];
  C.funds.forEach(function (f) {
    var s = fundScore(f); P += s[0]; T += s[1];
    rows.push("<li>" + esc(f.name) + ": " + s[0] + " of " + s[1] + " points</li>");
    if (tbHosts[f.key]) { buildTB(f, tbHosts[f.key]); buildCheckpoints(f, cpHosts[f.key]); }
  });
  var pct = T ? Math.round(100 * P / T) : 0;
  scoreHost.innerHTML = '<p class="score-big"><strong>Overall: ' + P + ' of ' + T + ' points (' + pct + '%)</strong></p><ul>' + rows.join("") + '</ul><p class="hint-line">Points count only for entries you have checked and that are correct. Editing an entry after you check it removes its point until you check it again.</p>';
  scoreHost.dataset.p = P; scoreHost.dataset.t = T;
}
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function section(f, title, sub, kids) {
  var sec = h("section", { "class": "part", "aria-labelledby": "h-" + f.key + title.replace(/\W/g, "") });
  sec.appendChild(h("h3", { id: "h-" + f.key + title.replace(/\W/g, ""), text: title }));
  if (sub) sec.appendChild(h("p", { text: sub }));
  kids.forEach(function (k) { sec.appendChild(k); });
  return sec;
}
function checkAll(f, group, list) {
  var b = h("button", { type: "button", text: "Check all entries in this section" });
  b.addEventListener("click", function () { list.forEach(function (e) { var c = entryEls[ek(f, group, e.id)]; if (c) c._check(); }); });
  return h("div", { "class": "btn-row" }, [b]);
}

C.funds.forEach(function (f) {
  var wrap = h("div", { "class": "fund", id: "fund-" + f.key });
  wrap.appendChild(h("h2", { text: f.name }));
  // beginning balances
  var bt = h("table", { "class": "tb narrow" });
  bt.appendChild(h("caption", { text: "Beginning balances, July 1" }));
  bt.appendChild(h("thead", {}, [h("tr", {}, ["Account", "Debit", "Credit"].map(function (x) { return h("th", { scope: "col", text: x }); }))]));
  var bb = h("tbody"), any = false;
  f.coa.forEach(function (a) { if (a.bd || a.bc) { any = true; bb.appendChild(h("tr", {}, [h("th", { scope: "row", text: a.a }), h("td", { "class": "n", text: fmt(a.bd) }), h("td", { "class": "n", text: fmt(a.bc) })])); } });
  bt.appendChild(bb);
  wrap.appendChild(section(f, "Beginning balances", any ? "Start from these balances." : "This fund has no beginning balances.", any ? [bt] : []));
  // journal
  var jk = [];
  f.tx.forEach(function (t) {
    var ent = f.journal.filter(function (e) { return e.id === t.id; })[0];
    if (ent) jk.push(buildEntry(f, "j", ent, t.text, t.id));
    else jk.push(h("div", { "class": "entry info" }, [h("h4", { "class": "entry-h", text: t.id }), h("p", { "class": "entry-txt", text: t.text }), h("p", { "class": "hint-line", text: "Information only. No journal entry is recorded for this item." })]));
  });
  wrap.appendChild(section(f, "Transaction journal", "Record each transaction. Enter amounts in whole dollars. Use one line per account.", [checkAll(f, "j", f.journal)].concat(jk)));
  // adjustments
  var ak = [];
  f.adjList.forEach(function (a) {
    var ent = f.adjust.filter(function (e) { return e.id === a.id; })[0];
    if (ent) ak.push(buildEntry(f, "a", ent, a.text, "Adjustment " + a.id));
    else ak.push(h("div", { "class": "entry info" }, [h("h4", { "class": "entry-h", text: "Adjustment " + a.id }), h("p", { "class": "entry-txt", text: a.text }), h("p", { "class": "hint-line", text: "Information only. No separate entry is needed; make sure your balances agree with this fact." })]));
  });
  wrap.appendChild(section(f, "Year-end adjustments", "Record the adjusting entries needed at June 30.", [checkAll(f, "a", f.adjust)].concat(ak)));
  // closing
  var ck = f.closing.map(function (e) { return buildEntry(f, "c", e, e.label, "Closing entry " + e.id); });
  wrap.appendChild(section(f, "Closing entries", "Close the temporary accounts.", [checkAll(f, "c", f.closing)].concat(ck)));
  // TB + checkpoints
  tbHosts[f.key] = h("div", { "class": "tbhost" }); cpHosts[f.key] = h("div", { "class": "cphost" });
  wrap.appendChild(section(f, "Adjusted trial balance", "This updates from your entries, the same way the workbook does.", [tbHosts[f.key]]));
  wrap.appendChild(section(f, "Checkpoints", "Compare your results with the case checkpoints. The page does not show the expected amounts.", [cpHosts[f.key]]));
  app.appendChild(wrap);
});

/* ---------- identity, print, reset ---------- */
var nm = $("#studentName"), sid = $("#studentId");
nm.value = st.name || ""; sid.value = st.sid || "";
nm.addEventListener("input", function () { st.name = nm.value; save(); });
sid.addEventListener("input", function () { st.sid = sid.value; save(); });
$("#printBtn").addEventListener("click", function () {
  $("#printNameLine").textContent = "Name: " + (nm.value.trim() || "____________________") + "     Student ID: " + (sid.value.trim() || "____________________") + "     Printed: " + new Date().toLocaleString();
  var t = document.title; document.title = "ACCT635-Llama-Falls-" + C.id.toUpperCase() + "-V2-" + (sid.value.trim() || "submission"); window.print(); document.title = t;
});
var rs = $("#resetBtn"), armed = false;
rs.addEventListener("click", function () {
  if (!armed) { armed = true; rs.textContent = "Click again to clear all my work"; setTimeout(function () { armed = false; rs.textContent = "Clear all my work"; }, 6000); return; }
  try { localStorage.removeItem(SK); } catch (e) {} location.reload();
});
refresh();
window.__engine = { st: function () { return st; }, grade: grade, compute: compute };
})();
