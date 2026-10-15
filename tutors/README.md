# ACCT 252 Socratic tutors (backup)

Backup copies of the chapter tutors. The live tutors are pages hosted on Claude (not served from here).
Each page uses Claude's `sample` capability, so it only works when opened on Claude.

## Live pages (Claude artifacts, claude.ai/artifact/...)
| Chapter | Artifact ID | File in `pages/` |
|---|---|---|
| 1 | HDPs8DgZNoRc7oszeSpRSR | tutor-ch1.html |
| 2 | BxaY46Lp9xaeHApvFZRNsY | tutor-ch2.html |
| 3 | RRW7a247zc2omMWhsrfPSQ | tutor-ch3.html |
| 4 | 2ExMHfHGu5iv8CkbKX3h48 | tutor-ch4.html |
| 5 | 4TekvuQK5vmJUoj9k62Cnt | tutor-ch5.html |
| 6 | EgZ4mJ8oTAwVLMBQF5UEav | tutor-ch6.html |
| 8 | EzzevTu6tVLR3oYGgXTTPg | tutor-ch8.html |
| 9 | 8WwEspxiiJoQRAUVDJhYgn | tutor-ch9.html |
| 10 | 5Xtab9sfJJiKF6AtHWDzgL | tutor-ch10.html |
| 12 | 4DdxfDDSWcMDhAoJgiCHEW | tutor-ch12.html |

## Source (`source/`)
- `template.html`: shared page template (placeholder `__TUTOR_PROMPT__`).
- `chapters.mjs`: per-chapter content (menu, formulas, common errors, seed problems with solutions) for Chapters 1, 3-6, 8-10, 12.
- `build-chapters.mjs`: `node build-chapters.mjs` writes `tutor-chN.html` for those chapters.
- `cvp-socratic-tutor.md` + `build.mjs`: Chapter 2 prompt and its build (writes `index.html`).
- `verify.py`: recomputes every seed-problem answer.
- `canvas-pages.mjs`: generates the Canvas "Your personal AI tutor" page bodies.

To change a tutor: edit the source, rebuild, and republish the page on Claude to the same artifact.
