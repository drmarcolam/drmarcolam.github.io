/* ACCT 635 Llama Falls V2: Assignment 5 (government-wide conversion). Data-driven from window.CASE5. Fixed figures. */
(function () {
"use strict";
var C = window.CASE5, SK = "acct635-v2-" + C.id;
var $ = function (s, r) { return (r || document).querySelector(s); };
function h(tag, attrs, kids) {
  var e = document.createElement(tag);
  for (var k in (attrs || {})) { if (k === "text") e.textContent = attrs[k]; else if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]); }
  (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
  return e;
}
function parse(s) {
  var raw = String(s == null ? "" : s).trim(); if (raw === "") return NaN;
  var neg = /^\(.*\)$/.test(raw) || /^[-−]/.test(raw);
  var v = parseFloat(raw.replace(/[^0-9.]/g, "")); if (isNaN(v)) return NaN; return neg ? -v : v;
}
function money(n) { var s = Math.abs(Math.round(n)).toLocaleString("en-US"); return n < 0 ? "($" + s + ")" : "$" + s; }
var st; try { st = JSON.parse(localStorage.getItem(SK) || "null"); } catch (e) { st = null; }
if (!st) st = { name: "", sid: "", v: {}, ok: {}, rev: {}, ch: {} };
function save() { try { localStorage.setItem(SK, JSON.stringify(st)); } catch (e) {} }

var cellList = [], secOf = {};
C.sections.forEach(function (s) { s.rows.forEach(function (r) { r.cells.forEach(function (c) { if (c && c.k) { c.graded = c.graded !== false; cellList.push(c); secOf[c.k] = s.id; } }); }); });

function sectionPoints(s) {
  var p = 0, t = 0;
  if (s.choice) { t = 1; if (st.ok[s.choice.k] && !st.rev[s.id]) p = 1; return [p, t]; }
  s.rows.forEach(function (r) { r.cells.forEach(function (c) { if (c && c.k && c.graded) { t++; if (st.ok[c.k] && !st.rev[s.id]) p++; } }); });
  return [p, t];
}
var scoreHost = $("#scorePanel"), tieHost = $("#ties");
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function refresh() {
  var P = 0, T = 0, li = [];
  C.sections.forEach(function (s) { var x = sectionPoints(s); P += x[0]; T += x[1]; li.push("<li>" + esc(s.title.replace(/^Part \d+: /, "")) + ": " + x[0] + " of " + x[1] + "</li>"); });
  scoreHost.innerHTML = '<p class="score-big"><strong>Overall: ' + P + " of " + T + " points (" + (T ? Math.round(100 * P / T) : 0) + '%)</strong></p><ul class="two">' + li.join("") + '</ul><p class="hint-line">Points count only for cells you have checked and that are correct. Editing a cell after you check it removes its point until you check it again.</p>';
  tieHost.textContent = "";
  C.ties.forEach(function (t) {
    function sum(ks) { var x = 0, any = true; ks.forEach(function (k) { var v = parse(st.v[k]); if (isNaN(v)) any = false; else x += v; }); return any ? x : null; }
    var a = sum(t.a), b = sum(t.b), msg, cls;
    if (a === null || b === null) { msg = "Enter all the amounts to test this tie."; cls = ""; }
    else if (Math.abs(a - b) <= 1) { msg = "✓ Ties: " + money(a); cls = "good"; }
    else { msg = "✗ Does not tie: " + money(a) + " vs " + money(b); cls = "badmsg"; }
    tieHost.appendChild(h("li", {}, [h("span", { text: t.l + ". " }), h("strong", { "class": cls, text: msg })]));
  });
}

var inputs = {};
function mark(c, ok, show) {
  var el = inputs[c.k]; if (!el) return;
  el.cell.className = show ? (ok ? "ok" : "bad") : ""; el.mk.textContent = show ? (ok ? "✓" : "✗ check") : "";
}
function checkSection(s) {
  if (st.rev[s.id]) return;
  if (s.choice) { var v = st.v[s.choice.k]; var ok = String(v) === String(s.choice.a); st.ok[s.choice.k] = ok; st.ch[s.choice.k] = true; var m = $("#res-" + s.id); m.textContent = ok ? "✓ Correct." : "✗ Not quite. Think about who owns the resources."; m.className = "entry-res " + (ok ? "good" : "badmsg"); save(); refresh(); return; }
  s.rows.forEach(function (r) { r.cells.forEach(function (c) {
    if (!c || !c.k || !c.graded) return;
    var v = parse(st.v[c.k]), ok = !isNaN(v) && Math.abs(v - c.a) <= 1;
    st.ok[c.k] = ok; st.ch[c.k] = true; mark(c, ok, true);
  }); });
  var x = sectionPoints(s); $("#res-" + s.id).textContent = x[0] + " of " + x[1] + " correct in this part."; $("#res-" + s.id).className = "entry-res " + (x[0] === x[1] ? "good" : "badmsg");
  save(); refresh();
}
function revealSection(s) {
  st.rev[s.id] = true;
  if (s.choice) { $("#res-" + s.id).textContent = "Answer shown: " + s.choice.opts[s.choice.a] + ". This part earns no points."; }
  else s.rows.forEach(function (r) { r.cells.forEach(function (c) { if (c && c.k && inputs[c.k]) { st.ok[c.k] = false; inputs[c.k].ans.textContent = "Answer: " + money(c.a); inputs[c.k].ans.hidden = false; mark(c, false, false); } }); });
  var m = $("#res-" + s.id); m.textContent = "Answers shown. This part earns no points."; m.className = "entry-res"; save(); refresh();
}

var app = $("#app");
var facts = h("section", { "class": "part", "aria-labelledby": "facts-h" }, [h("h3", { id: "facts-h", text: "Case facts" }), h("p", { text: "Use these facts and your results from Assignments 1 to 4." }),
  h("ul", {}, C.facts.map(function (f) { return h("li", {}, [h("strong", { text: f.id + ". " }), document.createTextNode(f.text)]); }))]);
app.appendChild(facts);

C.sections.forEach(function (s) {
  var sec = h("section", { "class": "part", "aria-labelledby": "h-" + s.id }, [h("h3", { id: "h-" + s.id, text: s.title }), h("p", { text: s.intro })]);
  if (s.choice) {
    var fs = h("fieldset", { "class": "choice" }, [h("legend", { text: s.choice.q })]);
    s.choice.opts.forEach(function (o, i) {
      var rb = h("input", { type: "radio", name: "cus", id: "cus" + i, value: String(i) }); if (String(st.v[s.choice.k]) === String(i)) rb.checked = true;
      rb.addEventListener("change", function () { st.v[s.choice.k] = String(i); st.ok[s.choice.k] = false; $("#res-" + s.id).textContent = "Choose Check to score your answer."; save(); refresh(); });
      fs.appendChild(h("div", {}, [rb, h("label", { "for": "cus" + i, text: " " + o })]));
    });
    sec.appendChild(fs);
  } else {
    var t = h("table", { "class": "grid" });
    t.appendChild(h("caption", { "class": "sr-only", text: s.title }));
    t.appendChild(h("thead", {}, [h("tr", {}, s.cols.map(function (c) { return h("th", { scope: "col", text: c }); }))]));
    var tb = h("tbody");
    s.rows.forEach(function (r) {
      var tr = h("tr", {}, [h("th", { scope: "row", text: r.label })]);
      r.cells.forEach(function (c, ci) {
        var td = h("td");
        if (c && c.k) {
          var inp = h("input", { type: "text", inputmode: "text", autocomplete: "off", "aria-label": s.title.split(":")[0] + ": " + r.label + ", " + s.cols[ci + 1], value: st.v[c.k] || "" });
          var mk = h("span", { "class": "mark" }), ans = h("span", { "class": "ans", hidden: "" });
          inp.addEventListener("input", function () { st.v[c.k] = inp.value; if (st.ok[c.k] || st.ch[c.k]) { st.ok[c.k] = false; st.ch[c.k] = false; mark(c, false, false); } save(); refresh(); });
          td.appendChild(inp); td.appendChild(mk); td.appendChild(ans);
          inputs[c.k] = { cell: td, mk: mk, ans: ans };
          if (c.graded === false) td.className = "optional";
        } else if (c && c.g !== undefined) { td.className = "given"; td.textContent = money(c.g); }
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    t.appendChild(tb); sec.appendChild(h("div", { "class": "scroll", role: "region", tabindex: "0", "aria-label": s.title }, [t]));
  }
  var b1 = h("button", { type: "button", text: "Check this part" }), b2 = h("button", { type: "button", "class": "secondary", text: "Show answers" });
  b1.addEventListener("click", function () { checkSection(s); }); b2.addEventListener("click", function () { revealSection(s); });
  sec.appendChild(h("div", { "class": "btn-row" }, [b1, b2]));
  sec.appendChild(h("p", { id: "res-" + s.id, "class": "entry-res", role: "status", "aria-live": "polite" }));
  app.appendChild(sec);
});
// restore marks after build
C.sections.forEach(function (s) { if (s.choice) return; s.rows.forEach(function (r) { r.cells.forEach(function (c) { if (c && c.k && c.graded && st.ch[c.k] && !st.rev[s.id]) mark(c, st.ok[c.k], true); }); }); if (st.rev[s.id] && !s.choice) s.rows.forEach(function (r) { r.cells.forEach(function (c) { if (c && c.k && inputs[c.k]) { inputs[c.k].ans.textContent = "Answer: " + money(c.a); inputs[c.k].ans.hidden = false; } }); }); });

var nm = $("#studentName"), sid = $("#studentId");
nm.value = st.name || ""; sid.value = st.sid || "";
nm.addEventListener("input", function () { st.name = nm.value; save(); }); sid.addEventListener("input", function () { st.sid = sid.value; save(); });
$("#printBtn").addEventListener("click", function () {
  $("#printNameLine").textContent = "Name: " + (nm.value.trim() || "____________________") + "     Student ID: " + (sid.value.trim() || "____________________") + "     Printed: " + new Date().toLocaleString();
  var t = document.title; document.title = "ACCT635-Llama-Falls-A5-V2-" + (sid.value.trim() || "submission"); window.print(); document.title = t;
});
var rs = $("#resetBtn"), armed = false;
rs.addEventListener("click", function () { if (!armed) { armed = true; rs.textContent = "Click again to clear all my work"; setTimeout(function () { armed = false; rs.textContent = "Clear all my work"; }, 6000); return; } try { localStorage.removeItem(SK); } catch (e) {} location.reload(); });
refresh();
})();
