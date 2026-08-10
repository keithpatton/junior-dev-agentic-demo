# Presenter guide and exact Codex prompts

## Before the audience arrives

1. Open the repository in Codex and confirm the working tree is clean.
2. Check out `run-3-phase-5`, start the local preview from `run-3`, and open it in a fresh/private browser window.
3. Keep the final browser tab, privacy test output, and `run-3-phase-5` ready as fallbacks.
4. Return to the empty-start checkpoint you plan to use, but do not close the known-good browser tab.
5. Put the deck in presenter mode and keep Codex plus the live browser one app-switch away.

## Phase 1 — broad talk prompt

> Build a demo-ready web app that helps a junior developer track job applications. Make the product useful and coherent. Do not ask me to choose a stack. Work end to end until the first version runs locally, then show me what you verified.

If it expands scope after 90 seconds:

> Keep this local and single-user. Optimise for a reliable two-minute product walkthrough: add, change status, and delete in the browser.

Hard fallback at two minutes: use `run-3-phase-1` and say, “The loop is allowed to have checkpoints; reliability is part of the system we designed.”

## Phase 2 — interrogate before changing

> Before you add more features, interrogate the product. What outcome is this tracker really for? Ask only the highest-leverage questions, then use my answers to reframe and modify it around: “What should I do next?” Verify that the answer changes when the underlying application changes.

Answer exactly:

- “They have five to twenty active applications.”
- “The pain is deciding where to spend the next thirty minutes.”
- “Success is opening the app and immediately seeing one defensible next action.”

Fallback: `run-3-phase-2`.

## Phase 3 — inspect the system, not every line

> Inspect this as a system without giving me a line-by-line code review. Show me the important seams, the contract at each seam, the invariants already implied by the product, and plausible failure modes. Connect every important claim to observable evidence. End with the highest-value risk to address next.

If the answer becomes code narration:

> Stay at the boundary level: storage, rendering, decision policy, form input, and export. What promise does each boundary make, and how could it fail?

Fallback: `run-3-phase-3` and its `SYSTEM-INSPECTION.md`.

## Phase 4 — update the context spine

> Update the repository context from what we actually learned. Keep it concise: product outcome and scope; architecture and seams; current and proposed invariants; the end-to-end workflow and recovery checkpoints. Create or update PRODUCT.md, ARCHITECTURE.md, INVARIANTS.md, and WORKFLOW.md. Check them against the running system and stop.

Fallback: `run-3-phase-4`.

## Phase 5 — make a promise executable

> Add this privacy invariant: free-text notes are session-private. They must never be written to persistent browser storage or included in exported/shareable data. First create an automated test that fails against the current design. Then make the smallest architectural change until it passes. Finally verify in the browser that ordinary application data survives a reload while the note does not. Work end to end and recover from failures yourself.

On the red test: “The failure is the product promise becoming visible.”

On the green test: “Passing is necessary. The browser still gets the final vote.”

Hard fallback by 18:15 talk time: `run-3-phase-5`, run the prepared privacy tests, and show the final browser tab.

## Universal nudges

Use only one at a time and count it honestly:

1. “Keep this local and single-user. Optimise for a reliable two-minute product walkthrough.”
2. “Stop expanding scope. Exercise the promised path in the browser and report what actually worked.”
3. “Return to the last phase checkpoint. Make the smallest change that satisfies this phase’s stop condition.”

## Speaker cues

- Do not fill silence with implementation commentary. Use agent waiting time to talk about context, feedback loops, and ownership.
- App-switch on an outcome: a working browser, a changed recommendation, a boundary map, a four-document spine, a red/green test.
- If recovery happens, frame it as evidence for end-to-end verification—not as embarrassment and not as magic.
- Never debug environment setup live. Switch checkpoints and keep the conceptual loop intact.
- The human contribution to name at the end: framing the outcome, challenging the first product, selecting the risk, defining the invariant, and demanding evidence.
