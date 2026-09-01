# System inspection — run 3

The review follows data and decisions across system seams rather than reading implementation line by line.

| Seam | Assumed contract | Evidence and risk |
|---|---|---|
| Persistent browser state | One versioned value is an array of application records and survives reload. | Browser inspection confirmed stage changes and notes both survive. A valid but malformed array is not validated. |
| State projections | Summary, recommendation, and board all reflect the current collection. | Moving Miro Bay to Wishlist updated its count and changed the recommendation to Good Sort. |
| Ranking policy | Eligible records have a next action; stage and deadline deterministically choose one. | The visible explanation names the same signals the score uses. It may still overstate a deliberately simple policy. |
| Input/render boundary | Company and role are required and all user text is escaped before HTML insertion. | Add flow and escaped render path passed in the browser. |
| Persistence/export boundary | Only data appropriate for that destination should cross. | Current whole-object serialisation sends notes to both destinations, violating the proposed privacy promise. |

## Invariants

- One current application collection drives all visible regions.
- The recommendation is an existing record with a non-empty next action.
- Recommendation ranking and explanation share stage and deadline inputs.
- Status is selected from the supported stage set.
- Invalid JSON or a non-array cannot prevent initial load.
- User text does not enter HTML unescaped.

## Failure modes

- Notes leak into durable and shareable representations.
- Storage quota or permission failures are invisible to the user.
- Structurally invalid records can enter from old storage.
- Deletion is immediate and cannot be undone.
- Dates use local-time conventions and the score does not refresh with a long-open page.
- A deterministic policy can be consistently wrong if the product has not captured effort or user intent.

The highest-value intervention is an explicit boundary projection with a failing privacy test, followed by browser proof that the rest of the record still survives reload.
