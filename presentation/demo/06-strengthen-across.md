# 06 — Strengthen across: one system foundation

## Learning from implementation review

The convenient whole-object design sent every field through two unrelated seams:

```text
application object ──► browser persistence
                  └──► downloaded data
```

Adding free-text notes therefore created a cross-cutting privacy risk.

## Invariant

> Free-text notes are session-private: they must not cross persistence or download boundaries.

## Structural change

Open [`../../data-boundaries.js`](../../data-boundaries.js).

Both boundaries now receive an explicit safe projection rather than the complete object. Open [`../../privacy.test.js`](../../privacy.test.js) to show that one invariant protects both seams.

This is “strengthening across”: a foundation—privacy, contracts, tests, observability, context—makes many current and future feature slices safer.
