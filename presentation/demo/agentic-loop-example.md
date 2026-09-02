# Task: Apply / Forward

One small Markdown file carries the consequential context through the loop. It is deliberately not a transcript of every agent action.

## 1. Ingest

### Outcome

Help a junior developer decide what to do next across their active job applications.

### Context

- application status and dates;
- one visible recommended action and reason;
- free-text notes are session-private;
- the prepared demo remains local-only.

### Unknowns to resolve

- How should incomplete dates affect the recommendation?
- Which fields cross persistence or download boundaries?
- What evidence would prove the recommendation is useful?
- Which decisions still require a human?

## 2. Plan and approve

### Proposal

- implement a deterministic next-action rule;
- show the reason and a graceful fallback;
- persist only the safe projection;
- verify behaviour in tests and the browser.

### Challenge

The first proposal assumed whole-object persistence was harmless. That would make free-text notes durable and downloadable by default.

### Revision

- separate explicit projections for persistence and download;
- do not make a privacy claim until both boundaries are proved.

### Human decision

`approved—with conditions`

- no cloud service;
- no predictive scoring;
- no privacy claim without boundary evidence.

## 3. Execute and review

### Claims

- [x] the agreed outcome works;
- [x] private notes do not persist or download;
- [x] browser behaviour agrees with the tests.

### Review

Start with outcome, boundaries, and reality. Follow risk into the implementation when the evidence points there.

### Remember

Route the durable invariant through `docs/spine/INVARIANTS.md`: free-text notes remain session-private.
