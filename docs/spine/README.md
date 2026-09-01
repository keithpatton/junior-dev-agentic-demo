# The context spine

The context spine is the repository’s deliberately compressed model of meaning.

It is not an encyclopedia and it is not a transcript of every decision. Like a bonsai, it is kept useful by deliberate pruning: enough structure to preserve identity and direction, without burying the next task in accumulated prose.

## Current meaning and historical change

The spine describes the system now:

- [`PRODUCT.md`](PRODUCT.md) — who it is for, the outcome, and non-goals;
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — components, boundaries, dependencies, and seams;
- [`INVARIANTS.md`](INVARIANTS.md) — the system’s “physics” and guardrails;
- [`GLOSSARY.md`](GLOSSARY.md) — terms whose meaning must not drift;
- [`DIRECTION.md`](DIRECTION.md) — current direction, known tensions, and deliberate deferrals;
- [`WORKFLOW.md`](WORKFLOW.md) — how changes are planned, challenged, proved, and remembered.

The planning trail under `/plans` records how that meaning evolved. Git records what changed; plans, reviews, approvals, evidence, and concise notes preserve the important why.

## Metacognition layer

`AGENTS.md` is the routing layer over the spine. It answers:

- What should an agent read for this task?
- Which source wins if context conflicts?
- What may the agent decide, and what must it escalate?
- When is a formal planning loop worth its cost?
- Where should new durable knowledge be written?

This separation matters. A giant agent prompt drifts and becomes hard to govern. A small route into focused, versioned sources is easier for humans and different models to inspect.

## Mechanical guard

The spine is not trusted merely because it looks organised. Run:

```bash
npm run test:spine
```

The guard verifies that the required spine sources exist, remain routed from `AGENTS.md`, and do not contain broken relative Markdown links. It cannot prove that the prose is wise or current; human and agent review still own meaning.

## Pruning rule

Add something to the spine only when forgetting it would predictably cause a future task to make a wrong product, architecture, safety, or workflow decision.

Remove or rewrite content when it is stale, duplicated, superseded, or better enforced by executable code.
