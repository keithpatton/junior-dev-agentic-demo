# 07 — Prove and remember

## Claims and evidence

| Claim | Evidence | Status |
| --- | --- | --- |
| private notes do not persist | focused boundary test | proved |
| private notes are absent from download | focused boundary test | proved |
| ordinary fields remain useful | projection test | proved |
| the application still loads and behaves in a browser | reload and interaction check | proved |

One rehearsal produced green unit tests and a broken browser module load. The browser check caught what the unit test did not exercise.

## Durable learning

The privacy rule was then written into:

- [`../../docs/spine/PRODUCT.md`](../../docs/spine/PRODUCT.md);
- [`../../docs/spine/ARCHITECTURE.md`](../../docs/spine/ARCHITECTURE.md);
- [`../../docs/spine/INVARIANTS.md`](../../docs/spine/INVARIANTS.md);
- [`../../docs/spine/WORKFLOW.md`](../../docs/spine/WORKFLOW.md).

The planning trail records how the decision emerged. The context spine records what the system means now.

Run `npm run test:spine` to demonstrate that the spine’s required sources, routes, and relative links are mechanically guarded. The guard protects structure; humans and agents still own meaning.
