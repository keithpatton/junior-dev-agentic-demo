# Talk 2 embedded-evidence revision — evidence

## Claims and evidence

| Claim | Status | Evidence |
| --- | --- | --- |
| The final presentation is the sole 19-slide delivery deck | proved | `presentation/Beyond-the-Prompt-JuniorDev-v9.pptx`; previous presentation iterations removed |
| Context examples are embedded and no prepared code view is required | proved | Markdown excerpts on slides 8, 10, and 12; `presentation/SPEAKER-GUIDE.md`; `presentation/demo/README.md` |
| One small Markdown artifact carries the three loop phases | proved | `presentation/demo/agentic-loop-example.md`; slides 8, 10, and 12 |
| The loop and human position are introduced before the phase details | proved | slides 5 and 6 |
| The practical loop supports the emerging agentic-builder role | proved | slides 4, 8, and 13–19; speaker-guide narrative and two-axis explanation |
| The opening is about building rather than code authorship | proved | slide 2 and its speaker notes |
| Internal framework names are absent from the audience-facing story | proved | deck text and speaker guide use the three loop phases and one Markdown artifact without the TAF label |
| The original visual system is retained | proved | source and final `ppt/theme/theme1.xml` SHA-256 hashes are identical; template fidelity check passed with zero issues |
| Slides avoid overflow and empty structural placeholders | proved | presentation `slides_test.py` passed; OOXML placeholder scan returned zero candidates |
| Repository and context-spine contracts still pass | proved | `npm test`; `npm run test:spine` |
| The whole deck is visually coherent at presentation size | proved | full-slide render review of all 19 slides, including targeted re-review of slides 13–19 |

## Remaining human proof

The presenter should rehearse the 25:30 story timing and decide whether the optional application reveal earns its 20 seconds on the day. This is delivery judgement, not a deck defect.
