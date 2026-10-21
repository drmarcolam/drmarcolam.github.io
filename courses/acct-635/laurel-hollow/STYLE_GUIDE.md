# ACCT 635 Blue Style Guide (Laurel Hollow redesign)

Starting point for every chapter and week. Source: the navy/blue palette already used in the ACCT 635 Chapter Notes, Chapter Walkthroughs and Word handouts. Files: `../chapter-walkthroughs/walkthrough.css` (base) + `laurel-hollow.css` (additions).

## Palette
| Role | Light | Dark |
|---|---|---|
| Navy (headings, links, table headers) | #1F4E79 | #8DB8E3 |
| Navy deep (banner, buttons, tags) | #1B365D | #0F2342 |
| Navy dark (dark-mode banner end) | #002060 | #0A1830 |
| Tint (key ideas, input panels) | #EDF2F8 | #1B2B42 |
| Page / paper | #F4F6F9 / #FFFFFF | #10151F / #161D2A |
| Ink / muted / line | #1A2233 / #4F5B6E / #D5DCE6 | #E6EBF2 / #B3BCC9 / #2C3748 |
| Accent (banner underline) | #B0925C | same |
| Focus ring | #C77700 | #FFB84D |
| Good / warn / bad | #E7F5EA bg, #2E7D32 line / #FFF3DE, #B86B00 / #FDEBE4, #B4481A | dark equivalents in walkthrough.css |

## Type
Headings Georgia (serif), bold, navy; h2 has a 3px navy underline. Body system-ui 17px/1.6. Eyebrow in monospace caps. Minimum 44px touch targets.

## Page anatomy (web walkthrough)
1. Skip link, breadcrumb (Courses / ACCT 635 / Laurel Hollow Walkthroughs / Week N).
2. Banner: eyebrow "ACCT 635 · Laurel Hollow · Week N Walkthrough", h1 title, one-line instruction.
3. Progress bar (checkpoints compared).
4. Objectives in a `.key-idea` box (navy left rule, tint background).
5. One `.lo-block` per step: `.lo-tag` (Step n of N · objective), h2, teaching text, optional `.textbook` line (AGNO 3e chapter and slides), then a `.example` card labelled "Checkpoint n" holding the question, a textarea, "Compare with the model answer", and a `.solution` block.
6. Start screen: name and Student ID (printed on the PDF). Each checkpoint locks the student's initial response and time-stamps it when they compare with the model answer.
7. Finish step: preview of a printable record (name, Student ID, PDF-created time stamp, each checkpoint with the locked initial response and the model answer) and a Print or save as PDF button. Students upload the PDF to Canvas (file upload, PDF only). Print CSS hides everything except the record.

## Rules
- Plain language first, then the term. One idea per step; five steps and five checkpoints per week.
- Every step tags the weekly objective it serves; objective numbers match the Canvas memo.
- Cite the textbook slides in a `.textbook` line.
- Accessible: real headings, labels on inputs, aria-live for feedback, visible focus, works in dark mode and print, no color-only meaning.
- No data leaves the page; answers are kept only in the student's browser (localStorage, wrapped in try/catch).

## Canvas version (inline styles, light mode)
Canvas strips stylesheets, so pages carry inline styles with the same colors: banner div (#1B365D, 4px #B0925C bottom border, white text, Georgia title); h2 navy Georgia with 3px bottom border; h3 #1B365D Georgia; tables with #1F4E79 header cells, white text, #D5DCE6 row lines; "Model answer" `<details>` with a 4px #1F4E79 left border on a #EDF2F8 background; callout `.key-idea` as a div with 5px #1F4E79 left border on #EDF2F8.

## To add a new week
Add its data to `walk_data.py` (title, objectives, five steps with obj/h/body/q/a/book), run `build_blue.py`, copy the output to `laurel-hollow/week-N.html`, and restyle the Canvas pages with the same inline recipe.
