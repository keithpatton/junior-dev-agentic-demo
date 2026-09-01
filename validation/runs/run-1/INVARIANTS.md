# Invariants

## Product invariants

- The screen shows at most one recommended next action.
- A recommendation always names an existing application and non-empty action.
- The explanation reflects the same inputs used to rank the action.
- Ledger counts, statuses, and recommendation derive from one current application list.

## Data and safety invariants

- Application identifiers are unique within a session.
- Status belongs to the five supported stages.
- User-provided text is escaped before HTML insertion.
- A failed or malformed storage read falls back safely rather than preventing the app from loading.
- Free-text notes are session-private and never cross persistent-storage or export boundaries. Automated boundary tests enforce both paths.

## Demo invariant

At every phase tag, the project runs with a static local server and the last promised user journey can be demonstrated without editing source code.
