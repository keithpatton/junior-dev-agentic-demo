# JuniorDev demo validation report

## Verdict

**Reliable enough to support a live talk as a recorded, checkpointed narrative—not as an unbounded live build.** All 15 rehearsal phases met their stop condition and no presenter nudge or human-authored implementation/documentation was required. Median end-to-end agent/browser work was **3:04.664**; the worst run was **4:01.449**.

The evidence does not support betting the talk on a completely cold environment. Run 1 lost time to preview startup policy, and its privacy change passed unit tests before breaking browser module loading. The final talk therefore uses prepared journey artifacts, a pre-opened browser, and an optional 30-second test run.

## Comparative timing

| Phase | Run 1 | Run 2 | Run 3 | Median | Worst case |
|---|---:|---:|---:|---:|---:|
| 1. Goal → first version | 2:09.034 | 1:02.748 | 0:59.872 | **1:02.748** | **2:09.034** |
| 2. Reframe around next action | 0:15.267 | 0:54.131 | 0:38.783 | **0:38.783** | **0:54.131** |
| 3. Inspect seams/contracts/risks | 0:19.463 | 0:13.623 | 0:15.504 | **0:15.504** | **0:19.463** |
| 4. Update context spine | 0:04.779 | 0:00.486 | 0:00.576 | **0:00.576** | **0:04.779** |
| 5. Privacy invariant → red/green/proof | 1:12.906 | 0:53.676 | 1:01.662 | **1:01.662** | **1:12.906** |

These clocks include agent changes, tests, browser verification, and ordinary recovery, but not the presenter's narration or audience comprehension time. The short durations are therefore a capacity result, not the talk pacing.

## Output quality

- All three first versions supported add, stage change, delete, persistence, and export and were readable at a 1280×720 projector viewport.
- All three reframed versions gave one visible next action and changed it deterministically when a stage changed.
- All three inspections independently found the same important boundary issue: notes were stored and exported because whole application objects crossed both seams.
- All three context spines captured product, architecture, invariants, and workflow in concise, mutually consistent documents.
- All three privacy tests first failed, then passed; browser proof confirmed ordinary fields persisted while the secret note did not.
- Mean rubric score was **9.1/10**. Every phase met the minimum functional and presenter-usability thresholds.

## Risk register and fallback design

| Risk | Evidence | Stage treatment | Fallback |
|---|---|---|---|
| Local preview fails to start | Run 1 background process was blocked. | Pre-open during tech check; do not start a server live. | Keep final app open in a browser tab and screenshots in the deck. |
| Cold build expands scope or varies visually | Only three runs; same agent benefits from rehearsal learning. | Do not cold-build on stage; show the recorded interrogation, plan, challenge and finished product. | Use `presentation/rehearsal/stages/app-c-proven/` or the final screenshot. |
| Agent edit needs self-recovery | Run 2/3 phase 2 and run 3 phase 5 had context misses. | Let the agent recover while continuing the narrative; do not narrate patch mechanics. | Switch to the next phase tag if the visible result is not ready by its cue. |
| Unit test passes while browser is broken | Run 1 privacy module MIME failure. | Explain why executable and browser evidence are both needed. | Show the prepared browser evidence and root privacy tests. |
| Browser state is contaminated by rehearsal | Local storage survives refresh. | Use a fresh browser profile/private window for the talk. | Use seeded final tab or clear site data during tech check. |
| Network styling fails | Run 1 used remote fonts; runs 2/3 did not. | Use run 3 as the live path because its core presentation is local. | Deck contains a final-state screenshot. |
| Export download is blocked or distracting | Browser permissions vary and download is not central to the thesis. | Do not download on stage; discuss export as a seam. | Show the boundary test result instead. |

## Original live-build timing map

This was the format used to validate the agent phases. It is retained as historical evidence, not as the recommended presentation plan. The current 30-minute plan is in `presentation/SPEAKER-GUIDE.md` and replaces live generation with selected recorded artifacts.

| Clock | Segment | Live action / checkpoint |
|---|---|---|
| 0:00–1:30 | **Promise:** idea → product → reframe → inspect → context → invariant, without writing implementation code. | No tools. Establish that the audience will see the complete loop. |
| 1:30–3:30 | The role moves up a level: print worker → digital editor; software engineer → product builder. | Slides. Define curiosity about systems as the durable skill. |
| 3:30–4:15 | Name the job-search problem and the bounded technical box. | Open Codex and paste phase 1 prompt. |
| 4:15–6:15 | While phase 1 runs: code is cheap; context, constraints, and evidence carry the work. | If not ready at 5:45, use scope nudge. At 6:15 switch to the prepared run 3 phase 1 artifact. |
| 6:15–7:45 | Reveal the working tracker; add/change/delete one record only if already stable. | Browser tab or phase 1 checkpoint. |
| 7:45–10:15 | Product interrogation: tracking was the request; deciding the next 30 minutes is the need. | Paste phase 2 prompt and the three fixed answers; reveal changed recommendation. |
| 10:15–12:45 | Systems thinking without line review. | Paste phase 3 inspection prompt; point to storage, decision, render, and export seams. |
| 12:45–14:15 | Context is part of the product. | Paste phase 4 prompt; reveal the four-document spine, then move on. |
| 14:15–19:15 | Privacy invariant: make the promise executable. | Paste phase 5 prompt. Show red test, green test, then browser reload proof. Switch to the prepared run 3 phase 5 evidence by 18:15 if needed. |
| 19:15–22:00 | What the human did: frame, question, choose risk, demand evidence, steer the loop. | Slides recap the interaction rather than the code. |
| 22:00–25:30 | Practical starting loop and close: goal → boundaries → evidence → context → invariant. | Re-state the opening promise and invite one small agent-owned workflow this week. |
| 25:30–30:00 | Questions | **4:30 reserved.** Final slide keeps the five-step loop visible. |

## Conclusion

The technically safest evidence path is **run 3**, preserved under `validation/runs/run-3/`, with local-only visual dependencies and a complete checkpoint chain. The most valuable conversational moment is the product reframe; the most valuable engineered moment is the privacy invariant. Context-spine updates are reliable but visually low-drama, so they should be a brief reveal. The privacy proof should never be allowed to consume the close: use the prepared evidence if the optional test run misbehaves.
