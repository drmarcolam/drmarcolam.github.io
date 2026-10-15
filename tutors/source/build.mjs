// Builds index.html (the page to publish) from template.html and the tutor prompt file.
// Usage: COURSE_NAME="..." node build.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const course = process.env.COURSE_NAME || "ACCT 252, Using Accounting Information for Management Decisions";

const md = readFileSync(join(here, "cvp-socratic-tutor.md"), "utf8");
const START = "=== START OF TUTOR PROMPT ===";
const END = "=== END OF TUTOR PROMPT ===";
const s = md.indexOf(START);
const e = md.indexOf(END);
if (s < 0 || e < s) throw new Error("START/END markers not found in the prompt file");

const prompt = md.slice(s + START.length, e).trim().replaceAll("[COURSE NAME]", course);
const left = prompt.match(/\[[A-Z][A-Z0-9 ]{2,}\]/g);
if (left) console.warn("Unfilled placeholders:", [...new Set(left)].join(", "));

// JSON.stringify gives a valid JS string; escape "<" so the text can never close the script tag.
const literal = JSON.stringify(prompt).replace(/</g, "\\u003c");
const template = readFileSync(join(here, "template.html"), "utf8");
if (!template.includes("__TUTOR_PROMPT__")) throw new Error("placeholder missing in template");
const html = template.replace("__TUTOR_PROMPT__", () => literal);

writeFileSync(join(here, "index.html"), html);
console.log(`Wrote index.html: ${html.length} bytes, prompt ${prompt.length} characters, course "${course}"`);
