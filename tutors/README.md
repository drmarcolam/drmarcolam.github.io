# ACCT 252 Socratic tutors (backup)

Backup copies of the chapter tutors. The live tutors are pages hosted on Claude (not served from here).
Each page uses Claude's `sample` capability, so it only works when opened on Claude.

## Hosted tutors
Chapters 1-6, 8, 10 and 12 are now self-contained pages in `ACCT252/` (no AI, random problems, one hint and one retry per step). Chapter 9 is still the Claude artifact below.

## Live pages (chat artifacts published from claude.ai, claude.ai/artifact/...)
The live links are the chat versions made from `chat/tutor-chN-chat.html`. The earlier versions (in `pages/`) used the `sample` capability, which signed-out and outside viewers could not use.
| Chapter | Artifact ID | File in `pages/` |
|---|---|---|
| 1 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter1_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter1_Tutor.html). Earlier artifact: GjsgJoNv6qWUwqKQEdpBeH | none |
| 2 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter2_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter2_Tutor.html). Earlier artifact: J5hNuBTw478Scm1YYQW5hZ | none |
| 3 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter3_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter3_Tutor.html). Earlier artifact: XVewgNcF6e5z6nEDf1cw7V | none |
| 4 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter4_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter4_Tutor.html). Earlier artifact: EEBRDfVVR6MHixjdnT4C5h | none |
| 5 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter5_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter5_Tutor.html). Earlier artifact: XGhHwegE1PxVuHW9d92Pps | none |
| 6 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter6_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter6_Tutor.html). Earlier artifact: 7see5nPyfjreux6EpescGU | none |
| 8 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter8_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter8_Tutor.html). Earlier artifact: 9czShLhCuvp4PC7HyXXkvy | none |
| 9 | Df97NFUiicQL4Cbrb3bL4R (chat version; earlier private version: 8WwEspxiiJoQRAUVDJhYgn) | tutor-ch9.html |
| 10 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter10_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter10_Tutor.html). Earlier artifact: PtRtvacV34TWRjBt6z6qtc | none |
| 12 | No longer on Claude. Now a self-contained page served from this repo: `ACCT252/ACCT252_Chapter12_Tutor.html` (https://drmarcolam.github.io/ACCT252/ACCT252_Chapter12_Tutor.html). Earlier artifact: HQGM82AKsfpwLpvmyEa7o6 | none |

## Source (`source/`)
- `template.html`: shared page template (placeholder `__TUTOR_PROMPT__`).
- `chapters.mjs`: per-chapter content (menu, formulas, common errors, seed problems with solutions) for Chapters 1, 3-6, 8-10, 12.
- `build-chapters.mjs`: `node build-chapters.mjs` writes `tutor-chN.html` for those chapters.
- `cvp-socratic-tutor.md` + `build.mjs`: Chapter 2 prompt and its build (writes `index.html`).
- `verify.py`: recomputes every seed-problem answer.
- `canvas-pages.mjs`: generates the Canvas "Your personal AI tutor" page bodies.

To change a tutor: edit the source, rebuild, and republish the page on Claude to the same artifact.
