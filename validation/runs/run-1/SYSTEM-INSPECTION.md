# System inspection — run 1, phase 3

This is a behavioural review of the running product, organised around boundaries rather than source lines.

## Seams and contracts

| Seam | Contract the rest of the system assumes | Observable evidence |
|---|---|---|
| Browser storage | Reading returns a list of application-shaped records; writing replaces the complete list under one versioned key. | A reload restored company, status, next action, and notes from `next-move-applications-v1`. |
| Application state → view | Every state change is followed by a complete render; rendered text must be escaped. | Adding, changing status, and deleting immediately updated both the ledger and summary. |
| Decision policy | Given records with a next action, ranking is deterministic: stage weight plus deadline urgency, descending. | Moving Kōwhai Labs from Interview to Wishlist changed the recommendation to Northstar Health. |
| Export | The downloaded JSON is intended to represent the user's application data. | The export action serialises the same in-memory application list used by storage and rendering. |
| Form → application record | Company and role are required; other fields may be empty; a new unique identifier is assigned. | The dialog blocks missing required fields and a saved record appears at the top of the ledger. |

## Current invariants

- Each application has a unique identifier during a browser session.
- Status is one of Wishlist, Applied, Screen, Interview, or Offer.
- Summary counts and the ledger derive from the same in-memory list.
- A recommendation is only made for a record with a concrete next action.
- User-controlled text is escaped before being inserted into rendered HTML.

## Failure modes worth discussing

1. **Sensitive data crosses a boundary silently.** Notes are persisted and included by the export path because both reuse the entire application object. Browser evidence confirmed note text in local storage. This is the highest-value risk for the privacy phase.
2. **Whole-list storage is fragile.** Quota exhaustion, blocked storage, or a write failure is not reported; the screen can imply a save that did not persist.
3. **Corrupt but valid JSON can break assumptions.** A stored object or malformed records pass parsing but do not satisfy the list/application contract.
4. **Deadline meaning is implicit.** Local date parsing and “due now” behaviour are reasonable for this demo but undefined across time zones and stale dates.
5. **The recommendation is explainable but simplistic.** Stage and urgency ignore effort, user confidence, and whether an action has already been completed.
6. **Deletion has no confirmation or undo.** One mis-click immediately removes a record and persists the loss.
7. **Remote fonts and export downloads are environment-dependent.** The product remains usable without the fonts, but projector appearance and browser download permissions may vary.

## Presenter-level conclusion

The product has four useful reasoning surfaces—persistence, rendering, prioritisation, and export. The important review question is not “is every line correct?” but “what data crosses each boundary, and which product promises must still hold when it does?” The privacy leak is directly observable and gives phase 5 a non-theatrical reason to exist.
