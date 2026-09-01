# JuniorDev live-demo validation

Presenting or rehearsing the talk? Start with [START-HERE.md](START-HERE.md).

This workspace records three empirical rehearsals of a five-phase, agentic-first product-building demo. Each run starts in its own empty directory and uses the same product brief, presenter answers, inspection request, documentation request, and privacy invariant.

## Fixed product brief

> Build a demo-ready web app that helps a junior developer track job applications. Make the product useful and coherent. Do not ask me to choose a stack. Work end to end until the first version runs locally, then show me what you verified.

Implementation is intentionally agent-authored. The presenter supplies goals, answers product questions, selects an invariant, and judges evidence; the presenter does not write implementation code or documentation.

## Five phase protocol

1. **Goal to first version.** Start from an empty run directory. Stop the clock when the app loads and the core add/update/delete journey has passed through a browser.
2. **Interrogate and reframe.** Ask what outcome the tracker should optimise for. The fixed presenter answers are: the user has 5–20 active applications; their pain is deciding where to spend the next 30 minutes; success means opening the app and immediately seeing one defensible next action. Modify and browser-check the product around “What should I do next?”
3. **Inspect the system.** Explain seams, contracts, invariants, and likely failure modes without a line-by-line walkthrough. Stop when a presenter can point to observable evidence and name one meaningful risk.
4. **Update the context spine.** Create or update concise product, architecture, invariants, and workflow documents from what the system actually does and what phase 3 uncovered. Check the documents against the running system.
5. **Add and enforce privacy.** Adopt the invariant: free-text notes are session-private and must never be written to persistent browser storage or included in exported/shareable data. Write a failing automated test first, modify the system until it passes, then prove both persistence of non-sensitive fields and non-persistence of notes in the browser.

## Timing boundary

Elapsed phase time includes agent reasoning, file changes, test execution, browser verification, and ordinary recovery. It excludes setup of this validation harness and the final comparative analysis. Git commits mark equivalent phase checkpoints.

## Live guardrails and nudge ladder

The presenter keeps the broad talk prompt, but the rehearsal uses these safety rails so “work end to end” has a bounded meaning:

- **Technical box:** local, single-user browser app; no sign-in, network API, package selection, deployment, or cloud database.
- **Phase 1 stop:** add, change status, and delete work in a browser; visual polish is good enough to read on a projector.
- **Phase 2 stop:** one next action is visible and its reasoning changes when application data changes.
- **Phase 3 stop:** name the storage, UI, decision-policy, and export seams; state their contracts and at least three plausible failures.
- **Phase 4 stop:** four short context documents agree with observable behaviour; no exhaustive documentation.
- **Phase 5 stop:** the privacy test fails for the old design, passes after the fix, and a reload proves notes disappeared while ordinary application data remained.

If the agent wanders, the presenter uses at most one nudge at a time and does not write the solution:

1. **Scope nudge:** “Keep this local and single-user. Optimise for a reliable two-minute product walkthrough.”
2. **Evidence nudge:** “Stop expanding scope. Exercise the promised path in the browser and report what actually worked.”
3. **Recovery nudge:** “Return to the last phase checkpoint. Make the smallest change that satisfies this phase’s stop condition.”

The run log records every nudge. In the live talk, checkpoints—not extra prompting skill—are the fallback.

## Quality rubric (0–2 each; 10 maximum)

- **Functional:** 0 broken; 1 primary path works with gaps; 2 primary path plus phase-specific behaviour verified.
- **Product fit:** 0 generic or confusing; 1 relevant tracker; 2 clearly answers the phase's user outcome.
- **Evidence:** 0 assertion only; 1 one form of evidence; 2 automated and/or browser evidence appropriate to the claim.
- **System legibility:** 0 opaque; 1 major parts named; 2 seams, contracts, invariants, and failures connected to observable behaviour.
- **Presenter usability:** 0 unsafe live; 1 usable with explanation or recovery; 2 clear actions, deterministic reveal, and a checkpoint.

A phase is live-demo viable only if its functional and presenter-usability scores are both at least 1. The full demo is considered reliable enough only if all 15 phases are viable, no phase requires human-authored implementation, and the validated talk path fits 25–26 minutes before questions.
