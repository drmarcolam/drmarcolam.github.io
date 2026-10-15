# ACCT 252 Socratic tutors (backup)

Backup copies of the chapter tutors. The live tutors are pages hosted on Claude (not served from here).
Each page uses Claude's `sample` capability, so it only works when opened on Claude.

## Live pages (chat artifacts published from claude.ai, claude.ai/artifact/...)
The live links are the chat versions made from `chat/tutor-chN-chat.html`. The earlier versions (in `pages/`) used the `sample` capability, which signed-out and outside viewers could not use.
| Chapter | Artifact ID | File in `pages/` |
|---|---|---|
| 1 | GjsgJoNv6qWUwqKQEdpBeH (chat version; earlier private version: HDPs8DgZNoRc7oszeSpRSR) | tutor-ch1.html |
| 2 | J5hNuBTw478Scm1YYQW5hZ (chat version; earlier private version: BxaY46Lp9xaeHApvFZRNsY) | tutor-ch2.html |
| 3 | XVewgNcF6e5z6nEDf1cw7V (chat version; earlier private version: RRW7a247zc2omMWhsrfPSQ) | tutor-ch3.html |
| 4 | EEBRDfVVR6MHixjdnT4C5h (chat version; earlier private version: 2ExMHfHGu5iv8CkbKX3h48) | tutor-ch4.html |
| 5 | 7J1KN15AAeqkrYAPPMZhiQ (chat version; earlier private version: 4TekvuQK5vmJUoj9k62Cnt) | tutor-ch5.html |
| 6 | 7see5nPyfjreux6EpescGU (chat version; earlier private version: EgZ4mJ8oTAwVLMBQF5UEav) | tutor-ch6.html |
| 8 | 9czShLhCuvp4PC7HyXXkvy (chat version; earlier private version: EzzevTu6tVLR3oYGgXTTPg) | tutor-ch8.html |
| 9 | Df97NFUiicQL4Cbrb3bL4R (chat version; earlier private version: 8WwEspxiiJoQRAUVDJhYgn) | tutor-ch9.html |
| 10 | PtRtvacV34TWRjBt6z6qtc (chat version; earlier private version: 5Xtab9sfJJiKF6AtHWDzgL) | tutor-ch10.html |
| 12 | HQGM82AKsfpwLpvmyEa7o6 (chat version; earlier private version: 4DdxfDDSWcMDhAoJgiCHEW) | tutor-ch12.html |

## Source (`source/`)
- `template.html`: shared page template (placeholder `__TUTOR_PROMPT__`).
- `chapters.mjs`: per-chapter content (menu, formulas, common errors, seed problems with solutions) for Chapters 1, 3-6, 8-10, 12.
- `build-chapters.mjs`: `node build-chapters.mjs` writes `tutor-chN.html` for those chapters.
- `cvp-socratic-tutor.md` + `build.mjs`: Chapter 2 prompt and its build (writes `index.html`).
- `verify.py`: recomputes every seed-problem answer.
- `canvas-pages.mjs`: generates the Canvas "Your personal AI tutor" page bodies.

To change a tutor: edit the source, rebuild, and republish the page on Claude to the same artifact.
