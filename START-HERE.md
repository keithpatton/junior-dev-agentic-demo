# Start here: JuniorDev Auckland, 2 September 2026

## What this talk became

The published talk promises a practical way for junior developers to plan, generate, review, test, and challenge AI-produced code without outsourcing judgment.

The deck makes that promise more opinionated:

> Do not measure ownership by how many generated lines you personally inspect. Own the outcome, boundaries, context, invariants, and evidence around the work.

The live demo builds a job-application tracker, challenges the first product, reframes it around “What should I do next?”, inspects the system at its seams, updates the repository context, and turns a privacy promise into a failing test, passing change, and browser proof. The presenter supplies judgment; the agent writes the implementation and documentation.

This is not “trust the agent.” It is a different location for scrutiny: the user outcome, system contracts, failure modes, and end-to-end evidence.

## Your thesis in plain language

Software engineering is lifting up a level. It is becoming less identifiable with the act of writing code and more identifiable with making reliable changes to complex product systems.

That makes the developer a changing mixture of:

- product manager — deciding which outcome is actually valuable;
- systems thinker — seeing interactions, incentives, feedback, and failure;
- architect — shaping boundaries, dependencies, contracts, and invariants;
- operator — designing workflow, observability, recovery, and proof;
- engineer — remaining accountable for whether the whole result works.

Code-level understanding becomes **less sufficient, not irrelevant**. A developer still needs enough fluency to investigate, challenge, and go deeper when the evidence points there. But syntax production, framework recall, and line-by-line inspection are weaker proxies for engineering competence when implementation can be generated cheaply.

Algorithms still matter when the problem is algorithmic—for performance, data processing, concurrency, security, and other constraint-heavy work. They are not the centre of most product-engineering decisions. The scarce judgment is increasingly around outcomes, architecture, boundaries, dependencies, process, and evidence.

A useful line for the room:

> The job is not becoming “know less about software.” It is becoming “understand more of the system.”

## What exists

- `output/talk/Beyond-the-Prompt-JuniorDev.pptx` — 14-slide deck with timings, cues, prompts, and fallbacks in speaker notes.
- `PRESENTER-GUIDE.md` — exact Codex prompts and the nudge ladder.
- `VALIDATION-REPORT.md` — measured results and the 30-minute running order.
- `RUN-LOG.md` — all 15 phase attempts, failures, recoveries, and quality scores.
- `run-3/` — the recommended live/fallback application.
- `run-3-phase-1` through `run-3-phase-5` — known-good phase tags.
- `live-demo-ready` — all validated demo assets and guidance.
- `talk-ready` — the validated deck.
- `demo-start` — the bounded pre-implementation repository state for a fresh attempt.

## The 30-minute shape

| Time | Job |
|---|---|
| 0:00–3:30 | Promise, personal framing, and the role moving up a level. |
| 3:30–7:45 | Broad goal to a working tracker. |
| 7:45–10:15 | Challenge the first product and reframe around the next action. |
| 10:15–12:45 | Inspect seams, contracts, invariants, and failures—not every line. |
| 12:45–14:15 | Reveal the four-document context spine briefly. |
| 14:15–19:15 | Make the privacy promise executable: red, green, browser reload. |
| 19:15–25:30 | Name the human contribution and give the audience a starting loop. |
| 25:30–30:00 | Questions. Protect the full 4:30. |

The measured agent work took 3:05 at the median and 4:01 at worst. The extra stage time is for audience comprehension, transitions, and recovery—not agent latency.

## The important trade-offs

1. **Agent-first is memorable, but can sound like “understanding no longer matters.”** Reconcile that immediately: implementation typing moves to the agent; product and system understanding move to the human foreground.
2. **A cold build looks magical, but varies.** Keep the broad spoken prompt, then use bounded repository context, a 90-second scope nudge, and a two-minute checkpoint. Reliability is part of the demonstration, not a hidden cheat.
3. **Line-by-line review feels responsible, but does not scale with cheap code.** Show the alternative: inspect boundaries, choose invariants, and demand evidence. Do not imply that source is never read; say it is inspected when risk or evidence points there.
4. **The context-spine phase matters, but has low stage energy.** Show that four useful documents now exist, explain that the next loop inherits them, and move on.
5. **A green unit test is reassuring, but incomplete.** Run 1 proved this: the test passed while browser module loading broke. The final browser reload is the strongest moment in the talk.

## Where to personalise it

Keep personal material short and place it where it advances the argument:

- **Opening, 30–45 seconds:** explain what changed in your own use of AI tools—from asking for code to shaping end-to-end work. Do not retell your career history.
- **After the Meetup promise:** “You were promised planning, generating, reviewing, testing, and challenging. I’m going to show you an opinionated version: review the system, not every generated line.”
- **At the first product reframe:** use one real example where a technically correct request was not the valuable product outcome. Avoid naming a client or confidential system.
- **At the browser-proof failure:** use one real sentence about why production experience made you distrust evidence that stops at a unit boundary.
- **After Enry’s talk, if it fits:** “Sustainable shipping is partly about removing toil. The trap is replacing typing toil with endless generated-code review. Better loops give us leverage without giving away ownership.”

Do not add more than two personal stories. The demo is already the narrative spine.

## Clone and rehearse

```powershell
git clone https://github.com/keithpatton/junior-dev-agentic-demo.git
cd junior-dev-agentic-demo
git tag --list
npm --prefix run-3 test
py -m http.server 4173 --directory run-3
```

Then open `http://localhost:4173` in a fresh/private browser window.

For a clean agent attempt without disturbing the deck checkout:

```powershell
git worktree add ..\junior-dev-live demo-start
```

Open `..\junior-dev-live` in Codex and use the phase 1 prompt from `PRESENTER-GUIDE.md` in the main checkout. Keep the finished `run-3` browser tab open separately.

## Tomorrow’s minimum safe setup

1. Upload the PPTX to Google Slides and verify its speaker notes.
2. Clone the repository and run the privacy tests once.
3. Open the final `run-3` app in a private window before leaving for the venue.
4. Keep Codex, slides, and one browser window as the only three stage surfaces.
5. Rehearse the 90-second nudge and two-minute checkpoint switch once.
6. Time a complete spoken run. Cut explanation before cutting the 4:30 question window.

If the live build fails, the talk has not failed. Move to the checkpoint and make the recovery itself part of the point: trustworthy agentic systems include engineered exits.
