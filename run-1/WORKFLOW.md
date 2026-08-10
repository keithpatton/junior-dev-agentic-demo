# Workflow

Work in goal-sized loops:

1. State the user outcome and a visible stop condition.
2. Inspect the smallest relevant system boundaries and current behaviour.
3. Make the change without expanding the technical box.
4. Exercise the outcome in a real browser; use automation for durable invariants.
5. Record what failed, what was recovered, and what changed in the context spine.
6. Commit and tag a known-good phase checkpoint before continuing.

For a live recovery, stop the current attempt and switch to the latest `run-1-phase-N` tag. Do not debug package installation, browser permissions, or local-server startup on stage. The venue tech check should leave the local server, browser tab, and final checkpoint ready.

Definition of done for the privacy change: demonstrate a failing privacy test against the old serializer, pass it after the smallest boundary change, reload in the browser, and show that ordinary application fields remain while notes do not.
