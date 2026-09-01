# Evidence: privacy invariant

## Claim

Free-text notes are session-private. They are not written to persistent browser storage and are not included in exported or shareable data.

## Evidence chain

1. The new automated test failed against the whole-object design.
2. Persistence and export received explicit projections instead of the complete application object.
3. The automated privacy tests passed after the change.
4. Browser verification showed ordinary application fields survived reload while the note disappeared.
5. Product, architecture, invariants, and workflow documents were updated so later tasks inherit the rule.

## Important recovery lesson

In one empirical run, the unit test passed while the browser was broken by an incorrect module-loading change. A passing test was therefore treated as one piece of evidence, not the finish line. The browser reload check caught the integration failure.
