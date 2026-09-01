# Beyond the Prompt — speaker guide

## Talk contract

- Total: 30 minutes.
- Content ends: 25:30.
- Questions: 4:30.
- Product: the root Apply / Forward application.
- Primary demo: prepared product behaviour and recorded journey artifacts.
- No live generation.
- Optional live proof: `npm test`, capped at 30 seconds.

## Opening promise

> You already know an AI can produce code. In the next 25 minutes I’m going to show you how to let it build more without surrendering the decisions that make the result engineering.

## Slide cues

| Time | Slide | Job | Core cue | Action / fallback |
| --- | ---: | --- | --- | --- |
| 0:00–0:45 | 1 | Promise | “Keep your judgement while agents do more of the building.” | Stay on slide. |
| 0:45–2:30 | 2 | Personal history | Big red books, CRT, coffee, learning from inside the leaves. | Use the image; no technology chronology. |
| 2:30–3:45 | 3 | Thesis | “The valuable unit is not the prompt. It is the loop.” | Pause after the final line. |
| 3:45–5:00 | 4 | Living product | A normal incomplete idea, not a foolish prompt or control experiment. | Optional 15-second app reveal; screenshot is the fallback. |
| 5:00–6:15 | 5 | Orient | Before: interrogate/plan/approve. Build: implement/review/recover. After: prove/remember. | This is the only process diagram. |
| 6:15–8:30 | 6 | Interrogate/reframe | Tracking is the mechanism; “What should I do next?” is the outcome. | Open `journey/SESSION-LOG.md` or the starting prompt. |
| 8:30–10:15 | 7 | Plan | Make intent, system assumptions, decisions and proof visible before code exists. | Show one decisive line per section, not the whole Markdown file. |
| 10:15–12:00 | 8 | Socratic challenge | Separate creation from challenge. Ask what the plan assumes and what would disprove it. | Open `02-plan-review.md` once the recorded journey creates it. |
| 12:00–12:50 | 9 | Approval | The agent proposes; the human owns material product, privacy, architecture and scope decisions. | Show the concise approval artifact. |
| 12:50–15:00 | 10 | Build | Relate each visible product behaviour back to an approved decision. | Open `http://localhost:4180`; screenshot fallback. |
| 15:00–17:45 | 11 | Challenge/prove | Privacy invariant, three passing tests, and the browser failure that unit tests once missed. | Optional `npm test`; cut first if pacing slips. |
| 17:45–19:45 | 12 | Remember | The trail records history; the curated spine describes what the system means now. | Show only the privacy invariant file if opening the repo. |
| 19:45–21:45 | 13 | Systems thinking | Grow the product; strengthen the system. Avoid horizontal/vertical terminology. | No demo. |
| 21:45–24:00 | 14 | Role shift | More access to engineering, not instant seniority or the end of technical knowledge. | Land curiosity, intentionality, judgement and responsibility. |
| 24:00–25:30 | 15 | Resolve promise | “What will you build when code is no longer the bottleneck?” | One meta line: the same loop shaped the talk; the application was the product. |
| 25:30–30:00 | 15 | Questions | Stop presenting. | Keep the closing question visible. |

## Demo order

Start a static server from the repository root before the talk:

```bash
npx serve .
```

Keep these ready:

1. root application in a browser;
2. `presentation/journey/prompts/00-start.md`;
3. `presentation/journey/SESSION-LOG.md`;
4. journey plan, review and approval artifacts after the recorded session;
5. `docs/spine/INVARIANTS.md`;
6. a terminal at the repository root with `npm test` ready in history.

Do not open source code unless a question makes one system seam materially useful. If that happens, show `data-boundaries.js` and `privacy.test.js`; they are short enough to explain the privacy contract without a line-by-line review of the application.

## Cut ladder

If behind time:

1. do not run `npm test` live;
2. shorten the app interaction to the next-action recommendation only;
3. describe the plan without opening the artifact;
4. reduce the context spine to “current meaning versus historical trail”;
5. never cut the Socratic challenge, browser-failure lesson, or agentic-builder ending.

## Fallbacks

- Browser problem: use `presentation/assets/apply-forward-final.png`.
- Terminal problem: state the prepared result—three privacy tests pass—and keep the exact command visible in the guide.
- Journey artifact missing: use the slide’s selected excerpt and explain that the complete recorded file is in the repository.
- Time pressure: move directly from slide 11 to slide 14; say the spine and system-foundation slides are available in the repository.

## TAF positioning

Use this balanced wording:

> Native planning and goal features are useful and can run inside this lifecycle. The repo-owned layer adds portability, team ownership, tailored gates, durable context and an inspectable evidence trail.

Then name its limit:

> Markdown volume can impersonate understanding. Use the stronger loop when ambiguity, consequence, risk, hand-off or blast radius warrants it. Keep trivial work trivial.

## Closing

> Code-level understanding remains useful, but it is no longer sufficient. Curiosity, intentionality, judgement and system thinking let you operate at a larger scale.

> The valuable unit is the loop.
