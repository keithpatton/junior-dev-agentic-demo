# Historical prepared comparison

These three historical versions were used to validate timing and recovery before the talk was recut around one living product. They are fallbacks and research evidence, not the primary talk sequence.

| Stage | URL | What it proves |
| --- | --- | --- |
| App A — one shot | `/presentation/rehearsal/stages/app-a-one-shot/` | A broad prompt produced a convincing working app quickly. |
| App B — approved outcome | `/presentation/rehearsal/stages/app-b-outcome/` | Product interrogation changed the product from “store applications” to “tell me what to do next.” |
| App C — challenged and proven | `/presentation/rehearsal/stages/app-c-proven/` | An explicit privacy invariant, automated test, browser proof, and durable context created evidence rather than confidence. |

## Audience-facing workflow

**Planning:** interrogate → plan → challenge → approve  
**Implementation:** build → challenge → prove → remember

This is a deliberately small adaptation of a more formal task-automation lifecycle. The talk does not teach a framework. It demonstrates the few controls that materially change the result:

- intake checks whether the goal is understood;
- a short plan exposes product and architecture decisions before implementation;
- a human approval gate retains ownership;
- review challenges boundaries and failure modes rather than scanning every line;
- tests and browser checks prove important claims;
- durable context gives the next task the same understanding.

## Historical rehearsal path

1. Show `prompts/01-one-shot.md`, then App A. Do not generate it live.
2. Ask the audience whether it is ready to ship.
3. Reveal the three confidence gaps in `artifacts/01-false-confidence.md`.
4. Show the intake questions, the plan, and the approval record.
5. Switch to App B and show the next-action recommendation.
6. Show the boundary review and privacy invariant.
7. Run the prepared test in App C only if the terminal is healthy; otherwise show `artifacts/05-evidence.md`.
8. Finish with the context spine in App C.

The final talk uses the root application and `presentation/journey` instead. Keep these stages only as emergency browser fallbacks and empirical history.
