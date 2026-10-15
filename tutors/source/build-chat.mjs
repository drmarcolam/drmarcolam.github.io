// Makes chat-artifact variants: same page, but talks to Claude through window.claude.complete
// (the AI feature of artifacts created in a claude.ai chat), falling back to the sample capability.
import { readFileSync, writeFileSync } from "node:fs";
const files = { 1:"tutor-ch1.html",2:"index.html",3:"tutor-ch3.html",4:"tutor-ch4.html",5:"tutor-ch5.html",6:"tutor-ch6.html",8:"tutor-ch8.html",9:"tutor-ch9.html",10:"tutor-ch10.html",12:"tutor-ch12.html" };
const OLD = `  if (window.claude && typeof window.claude.use === "function") {`;
const NEW = `  if (window.claude && typeof window.claude.complete === "function") {
    // Chat-artifact mode: one text prompt in, one text answer out.
    sample = function (input) {
      var prompt = input.map(function (m) {
        return (m.role === "user" ? "Student: " : "Tutor: ") + m.content;
      }).join("\\n\\n") + "\\n\\nTutor:";
      return Promise.resolve(window.claude.complete(prompt)).then(function (r) {
        return { text: typeof r === "string" ? r : (r && r.text) || "" };
      });
    };
    startStatus.textContent = "";
    setControls();
  } else if (window.claude && typeof window.claude.use === "function") {`;
for (const [n, f] of Object.entries(files)) {
  const h = readFileSync(f, "utf8");
  if (!h.includes(OLD)) throw new Error("anchor missing in " + f);
  writeFileSync(`chat/tutor-ch${n}-chat.html`, h.replace(OLD, () => NEW));
}
console.log("ok");
