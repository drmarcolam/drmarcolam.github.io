import { chapters } from "./chapters.mjs";
const ids = {1:"HDPs8DgZNoRc7oszeSpRSR",2:"BxaY46Lp9xaeHApvFZRNsY",3:"RRW7a247zc2omMWhsrfPSQ",4:"2ExMHfHGu5iv8CkbKX3h48",5:"4TekvuQK5vmJUoj9k62Cnt",6:"EgZ4mJ8oTAwVLMBQF5UEav",8:"EzzevTu6tVLR3oYGgXTTPg",9:"8WwEspxiiJoQRAUVDJhYgn",10:"5Xtab9sfJJiKF6AtHWDzgL",12:"4DdxfDDSWcMDhAoJgiCHEW"};
const mods = {1:562603,2:562604,3:562615,4:562616,5:562621,6:562622,8:562625,9:562632,10:562643,12:562647};
const cvpMenu = ["Break-even analysis","Target profit analysis","Margin of safety","Contribution margin and CM ratio","Degree of operating leverage","Sales mix and break-even for multiple products","What-if (incremental) analysis","After-tax target profit"];
const out = {};
for (const n of Object.keys(ids)) {
  const c = chapters.find(x => x.n == n);
  const menu = c ? c.menu : cvpMenu;
  const h = `<h3 style="color: #592C88;"><span style="font-size: 14pt;">`;
  out[n] = { module: mods[n], body:
`<div style="background-color: #592C88; padding: 28px 24px; border-bottom: 6px solid #C1A875; border-radius: 6px; margin-bottom: 24px;"><h2 style="color: #ffffff; margin: 0; font-size: 24pt;">Your Personal AI Tutor</h2></div>
${h}Open the Chapter ${n} tutor</span></h3>
<p><span style="font-size: 12pt;">With the help of my buddy Claude, I have created a personal AI tutor for this chapter. If you have a Claude account, you can open it here: <a href="https://claude.ai/artifact/${ids[n]}" target="_blank" rel="noopener">Chapter ${n} AI Tutor (opens in Claude in a new tab)</a></span></p>
${h}How it works</span></h3>
<p><span style="font-size: 12pt;">The tutor asks which type of problem you want to practice. Answer its questions one at a time. If you get stuck, say so and it will give you a hint. It will not hand you the final answer, because the goal is for you to work it out.</span></p>
${h}Problem types you can practice</span></h3>
<ul>${menu.map(m => `<li><span style="font-size: 12pt;">${m}</span></li>`).join("")}</ul>
<p><span style="font-size: 12pt;">You can also paste a problem from your homework or the textbook and work through it with the tutor.</span></p>
<p><span style="font-size: 12pt;">The tutor is an AI and can make mistakes. Check important results against your textbook and notes, and ask me if something does not look right.</span></p>` };
}
console.log(JSON.stringify(out));
