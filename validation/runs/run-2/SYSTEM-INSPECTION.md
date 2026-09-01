# System inspection — run 2

## Behavioural map

| Boundary | Contract | Evidence / concern |
|---|---|---|
| Storage adapter embedded in state code | The versioned key contains an array; writes replace the full collection. | Reload preserved ordinary fields, but browser inspection showed every note persisted too. |
| Form and pipeline events | Valid form data becomes one identified record; status/delete events target the enclosing record. | Add, stage change, and delete passed through the browser. |
| Recommendation policy | Only records with a next action qualify; stage and deadline produce a deterministic score. | Changing Aroha Energy to Wishlist moved the recommendation to Paper Kite and changed the explanation. |
| Renderer | Metrics, recommendation, and pipeline must be projections of the same current list; user text is escaped. | A single change updated all three regions with consistent counts. |
| Export | A shareable JSON file is built from application data. | It currently reuses the unrestricted in-memory objects, including notes. |

## Invariants already present

- Supported stages are fixed and the browser controls only emit those stages.
- Recommendation and explanation use the same score inputs.
- Required company and role fields are enforced at the form boundary.
- Stored invalid JSON falls back to seed data; a valid non-array also falls back.
- User-entered text is escaped before it becomes HTML.

## Likely failure modes

1. Private notes leak into durable storage and exports through object reuse.
2. Storage writes can fail silently, leaving the display ahead of durable state.
3. Old array-shaped data with missing or invalid fields passes the coarse read guard.
4. One accidental delete is durable and has no undo.
5. A simplistic score can look authoritative even though it omits effort and user intent.
6. Deadline calculations depend on local date semantics and can age while the page stays open.

## Highest-value next move

Introduce a named serializer at persistence and export boundaries, then enforce note exclusion with tests. This improves a product promise without reviewing or rewriting the whole interface.
