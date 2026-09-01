# Agent routing guide

This file is the entry point, not the whole context. Keep it short enough to remain useful.

## Journey-branch guardrail

This branch begins with one unvalidated product idea: **build a job application tracker for junior developers**.

During interrogation, planning, challenge, and approval:

- do not inspect Git history, `main`, the final deck, presentation images, `presentation/rehearsal/`, or `validation/runs/`;
- do not infer product requirements from prepared fallback material;
- treat `presentation/journey/` as the only talk-specific working record;
- stop before implementation until the human explicitly approves the challenged plan.

These boundaries make the journey repeatable and keep the product conversation authentic.

## Read first

1. Read [`docs/spine/README.md`](docs/spine/README.md).
2. Follow its links only for the part of the system you are changing.
3. For material, ambiguous, risky, or cross-cutting work, use [`plans/README.md`](plans/README.md).
4. Treat the latest approved plan as the execution contract for that task.

## Authority

When sources disagree, prefer them in this order:

1. explicit user decision;
2. executable tests and enforced contracts;
3. current context-spine documents;
4. latest approved task plan;
5. implementation and repository history;
6. chat history or model recollection.

Do not silently resolve a product, privacy, security, or architecture decision from a lower-authority source.

## Required behaviour

- Interrogate the intended outcome before optimising the first wording of a request.
- State material assumptions and identify decisions that require a human.
- Challenge plans and implementations against explicit criteria and evidence.
- Do not let the author of a material plan approve the same revision when an independent review path is available.
- Stop when a product or architecture decision is missing, validation is blocked, or the work crosses its approved scope.
- Update the context spine when the task changes current product meaning, architecture, invariants, glossary, direction, or workflow.
- Record only non-obvious durable lessons; do not turn context files into progress logs.

## Repository routes

| Need | Source |
| --- | --- |
| Purpose, audience, non-goals | `docs/spine/PRODUCT.md` |
| Structure, boundaries, dependencies | `docs/spine/ARCHITECTURE.md` |
| Rules that must remain true | `docs/spine/INVARIANTS.md` |
| Shared terminology | `docs/spine/GLOSSARY.md` |
| Current direction and deliberate deferrals | `docs/spine/DIRECTION.md` |
| How the repository is changed and proved | `docs/spine/WORKFLOW.md` |
| Formal task lifecycle | `plans/README.md` |
| Recorded product journey | `presentation/journey/README.md` |
| Historical rehearsal states | Sealed until the recorded journey is complete |

## Model independence

These instructions are plain Markdown by design. A tool-specific instruction file may point here, but it must not redefine the lifecycle or silently weaken the gates.
