# Prepared show path

This is the only evidence folder opened during the talk. It contains concise, presentation-ready samples aligned to the working application. They demonstrate how the Task Automation Framework would preserve consequential moments; they are not a verbatim transcript or a complete historical system of record.

## Slide → show → return

| Slide | Show | Stop on | Return line |
| ---: | --- | --- | --- |
| 4 | [`01-idea-discussion.md`](01-idea-discussion.md) | Starting request, two questions, reframed outcome | “The idea changed before the code did.” |
| 7 | [`02-plan-v1.md`](02-plan-v1.md) | Assumptions requiring challenge | “A plan is a proposal, not permission.” |
| 8 | [`03-socratic-plan-review.md`](03-socratic-plan-review.md) | One finding: question, consequence, required revision | “Challenge prepares the decision; it does not own it.” |
| 9 | [`04-approved-plan.md`](04-approved-plan.md) | Human decision and conditions | “Now the agent has permission to act—inside an explicit decision frame.” |
| 10 | [`05-build-up.md`](05-build-up.md), then [`../../app.js`](../../app.js) at `chooseNext()` | One feature slice and its deterministic decision rule | “The website is not the punchline. The inspectable chain of decisions is.” |
| 11 | [`../../data-boundaries.js`](../../data-boundaries.js) beside [`../../privacy.test.js`](../../privacy.test.js) | One invariant crossing two seams | “A passing feature is not enough if the system boundary is wrong.” |
| 12 | [`07-proof-and-memory.md`](07-proof-and-memory.md), then [`../../docs/spine/INVARIANTS.md`](../../docs/spine/INVARIANTS.md) | Claims/evidence, then the durable rule | “A proved decision helps once. A remembered decision shapes the next change.” |

[`06-strengthen-across.md`](06-strengthen-across.md) is the concise explanation behind the slide 11 code view. Keep it ready for questions; it does not need another on-stage switch.

## Rules for showing

- Pre-open every file at the exact heading above with editor sidebars hidden and large text.
- Never search or scroll for a point on stage.
- Keep each repository excursion under 90 seconds.
- Show the running application for no more than 20 seconds.
- Do not open source code beyond the named functions unless a question warrants it.
- No network or live agent is required.

Optional local proof:

```bash
npm test
npm run test:spine
```
