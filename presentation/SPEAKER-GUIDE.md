# Beyond the Prompt — speaker guide

## Talk contract

- Total: 30 minutes.
- Finish the story by 25:30; reserve 4:30 for questions.
- This is not a live-coding talk and not a catalogue of agent features.
- The examples illustrate one emerging way of working: shape, authorise, evaluate, remember.
- The files under `presentation/demo` are presentation-ready samples, not a claimed verbatim execution history.
- Use a consistent rhythm: **SLIDE → SHOW ONE PIECE OF EVIDENCE → RETURN**.
- Never remain outside the deck for more than 60–90 seconds.
- The application reveal is optional and capped at 20 seconds: “Yes, agents can build software. Whoop-de-doo. The interesting part is how we stayed inside the decisions.”

## Opening promise

> You already know an AI can produce code. In the next 25 minutes I’m going to show you a way of working in which agents do more of the work while you keep hold of the decisions, the evidence and the meaning of the system.

## The narrative thread

The talk is not “here are some techniques.” It is a progression in what the developer pays attention to:

1. bring intent, consequences, constraints and unknowns;
2. make a proposal inspectable before work begins;
3. challenge it against criteria instead of merely chatting with it;
4. authorise consequential choices;
5. delegate implementation while retaining the decision frame;
6. evaluate claims about outcomes, boundaries and reality;
7. curate the rules and context inherited by the next cycle;
8. move fluidly between building a feature up and strengthening the system across;
9. become an agentic builder: more powerful because judgement is applied at system scale.

## Slide → show → return

| Time | Slide | Say | Show outside the deck | Return line |
| --- | ---: | --- | --- | --- |
| 0:00–0:45 | 1 | Promise: keep judgement while agents do more work. | Nothing. | — |
| 0:45–2:30 | 2 | Late-90s books, coffee and the fear of another technology shift. Young and old face the unknown from different ends. | Nothing. | “The tools changed. The obligation to understand consequences did not.” |
| 2:30–3:45 | 3 | “The valuable unit is not the prompt. It is the loop.” Pause. | Nothing. | — |
| 3:45–5:15 | 4 | A prompt begins the work; the human brings intent, consequences, constraints and unknowns. | `presentation/demo/01-idea-discussion.md`: starting request, two questions, reframed outcome | “The idea changed before the code did.” |
| 5:15–6:45 | 5 | The human stays inside the work by shaping, authorising and evaluating. Agents work between checkpoints. | Nothing. | — |
| 6:45–8:15 | 6 | Do not inspect every token. Spend scarce attention at consequential moments. | Nothing. | — |
| 8:15–9:45 | 7 | A small, repo-owned Markdown layer makes the gates portable and inspectable. Native planners can sit inside it. | `plans/README.md` at “Planning loop”, then `presentation/demo/02-plan-v1.md` at “Assumptions requiring challenge” | “A plan is a proposal, not permission.” |
| 9:45–12:15 | 8 | The core loop is Socratic: propose, challenge against criteria, revise, then reach a human checkpoint. Keep the challenge bounded; endless debate can drift. | `presentation/demo/03-socratic-plan-review.md`: one complete finding only | “Challenge prepares the decision; it does not own it.” |
| 12:15–13:15 | 9 | The agent can propose. It cannot own the product decision, risk appetite or accountability. | `presentation/demo/04-approved-plan.md`: human decision and conditions | “Now the agent has permission to act—inside an explicit decision frame.” |
| 13:15–15:15 | 10 | Delegate exploration, drafting, implementation and recovery. Keep intent, risk, approval and outcome. | `presentation/demo/05-build-up.md`, `app.js` at `chooseNext()`, then the app for at most 20 seconds | “The website is not the punchline. The inspectable chain of decisions is.” |
| 15:15–17:30 | 11 | Review claims, not every generated line: outcome, boundaries, reality. | One editor split: `data-boundaries.js` beside `privacy.test.js`; optionally run `npm test` | “A passing feature is not enough if the system boundary is wrong.” |
| 17:30–20:00 | 12 | The task trail records how meaning changed; the curated spine says what the system means now. Love the metacognition layer. | `presentation/demo/07-proof-and-memory.md`, then `docs/spine/INVARIANTS.md`; optionally run `npm run test:spine` | “A proved decision helps once. A remembered decision shapes the next change.” |
| 20:00–22:15 | 13 | Build up through an outcome; strengthen across with privacy, contracts, tests, observability and standards. One builder can switch contexts that once sat across roles or teams. | Nothing—point back to the two examples already shown. | “This wider field of attention changes the role.” |
| 22:15–24:00 | 14 | The agentic builder shapes intent, designs boundaries, orchestrates capabilities and evaluates evidence. This is more access to engineering, not instant seniority. | Nothing. | — |
| 24:00–25:30 | 15 | Resolve the promise. Curiosity, intentionality, judgement and evidence become leverage when code is no longer the bottleneck. | Nothing. | “The valuable unit is the loop.” |
| 25:30–30:00 | 15 | Questions. Stop presenting. | Open an artifact only in response to a question. | — |

## Prepared tabs

Open these before the talk in this order:

1. the PowerPoint deck;
2. `presentation/demo/01-idea-discussion.md`;
3. `plans/README.md` and `presentation/demo/02-plan-v1.md`;
4. `presentation/demo/03-socratic-plan-review.md` and `04-approved-plan.md`;
5. `presentation/demo/05-build-up.md`, `app.js` at `chooseNext()`, and the application;
6. an editor split with `data-boundaries.js` and `privacy.test.js`;
7. `presentation/demo/07-proof-and-memory.md` and `docs/spine/INVARIANTS.md`;
8. a terminal at the repository root with `npm test` and `npm run test:spine` in history.

Use large editor text, hide sidebars, and position each file at the exact excerpt you intend to show. Do not scroll in search of a point.

## TAF positioning

> The Task Automation Framework is a small Markdown-first control layer: intake, proposal, criteria-based challenge, human approval and proof. It is portable across repositories and models, and it leaves an inspectable trail.

Then qualify it:

> Native planning and goal features are useful and can operate inside this lifecycle. The repo-owned layer adds team ownership, tailored gates and durable memory.

And name the limit:

> Markdown volume can impersonate understanding. Use the stronger loop when ambiguity, consequence, risk, hand-off or blast radius warrants it. Keep trivial work trivial.

## Research language

- Say “bounded Socratic challenge is a useful engineering heuristic,” not “agents arguing always improves answers.” Controlled debate and self-refinement research supports critique loops, while later work also shows prolonged debate can drift.
- Say “plans, structured docs and executable constraints make repositories more legible to agents,” consistent with current agent-harness practice.
- Say “evaluate the produced outcome and its effects,” not “ignore implementation forever.” Code-level inspection remains available when evidence or risk points you there.

## Cut ladder

If behind time:

1. do not run either test command;
2. skip the application reveal;
3. show only one line from the initial plan;
4. show the critique and approved plan side-by-side without reading all findings;
5. describe the spine without leaving the slide;
6. never cut the Socratic loop, the human gate, build-up/strengthen-across, or the agentic-builder ending.

## Fallbacks

- Browser problem: use `presentation/assets/apply-forward-final.png` or simply skip the application.
- Terminal problem: keep the command visible and state the prepared result: all application and spine checks pass.
- Editor problem: the deck contains the complete conceptual story; continue without leaving PowerPoint.
- Time pressure: move from slide 11 directly to slide 14 and say the context-spine and two-modes examples are in the repository.

## Closing

> Code-level understanding remains useful, but it is no longer sufficient. The problem layer is moving upward: toward intent, boundaries, system behaviour, evidence and stewardship.

> You do not leave the loop. You decide where the loop needs you—and you curate what the next loop inherits.
