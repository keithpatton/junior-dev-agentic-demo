# Beyond the Prompt — speaker guide

## Talk contract

- Total: 30 minutes. Finish the story by 25:30 and reserve 4:30 for questions.
- Use `Beyond-the-Prompt-JuniorDev-v9.pptx`.
- This is not a live-coding talk and not a catalogue of agent features.
- Stay in PowerPoint for every context example. The Markdown-derived evidence is embedded in the deck.
- Do not show source code during the prepared talk.
- The application reveal is optional and capped at 20 seconds.
- The practical takeaway is one loop with three phases: ingest, plan/approve, execute/review.
- Each phase uses the same bounded adversarial engine: propose, challenge, then accept at the human gate or revise and loop back.
- One deliberately small Markdown artifact carries the consequential context across all three phases.
- That loop supports the larger idea: an emerging agentic-builder role in which an engineer operates across a wider system without surrendering judgement.
- End with the provocations that help a developer stay inside the loop.

## Opening promise

> You already know an AI can produce code. In the next 25 minutes I’m going to show you a way of working in which agents do more of the work while you keep hold of the decisions, the evidence and the meaning of the system.

## Narrative thread

The developer’s attention moves through four ideas:

1. Code was the material that let us build; we learned its local craft because that was the route to working systems.
2. Fast, plausible code can now arrive before understanding, so the valuable unit becomes the engineering loop around it.
3. Agentic builders need both vertical product delivery and horizontal system trust from day one.
4. Easier production of code makes system-level intent, evidence, ownership, and memory more important—not less.

## Slide path

| Time | Slide | Purpose and cue |
| --- | ---: | --- |
| 0:00–0:40 | 1 | Promise: this is about becoming a stronger engineer, not producing more code. |
| 0:40–2:15 | 2 | “I loved what code let me build.” Tabs, naming, architecture, SOLID, and algorithms mattered because craft was the route from an idea to a system. Local mechanics are becoming cheaper; the differentiator moves toward system-level intent, boundaries, interactions, and evidence. |
| 2:15–3:15 | 3 | Name the risk: AI can give you working code before understanding. Fluency is not evidence. |
| 3:15–4:00 | 4 | Pause on the thesis: “The valuable unit is not the prompt. It is the loop.” Frame the practical loop as the operating discipline of an emerging agentic builder. |
| 4:00–5:15 | 5 | Build the whole loop left to right: ingest, plan/approve, execute/review. The human sits at the gates through intent, decisions, evidence, and memory; the result feeds the next loop. |
| 5:15–6:30 | 6 | Introduce the adversarial engine inside every phase: propose, challenge, then accept at the human gate or revise and loop back. Use the restored Socratic visual to stress bounded challenge, not endless debate. |
| 6:30–7:30 | 7 | Introduce ingestion: interrogate the outcome, audience, sensitivity, and unknowns before automating anything. |
| 7:30–8:45 | 8 | Show a representative ingestion conversation: the human brings an initial ask, the agent challenges what is missing, and both arrive at an outcome ready to plan. This is a pattern, not a literal transcript. |
| 8:45–10:00 | 9 | Introduce planning/approval as one decision loop. “A plan is a proposal, not permission.” |
| 10:00–11:30 | 10 | Show a representative agentic trace: the primary agent proposes, a challenge agent tests assumptions, the plan is refined, and the human approves, redirects, or stops. “Challenge prepares the decision; it does not own it.” |
| 11:30–12:45 | 11 | Introduce execution/review: build inside the approved frame, then review outcome, boundaries, and reality. |
| 12:45–14:00 | 12 | Mirror the planning trace for implementation: execution agent, challenge agent, fix issues, then the human deployment gate. Ask: “Coverage sufficient? Tests passing?” The badge lands on “Ready to deploy?” |
| 14:00–15:15 | 13 | Land the app as the visible output of the whole loop. Agents performed the labour and challenge; the human retained the gates. Optional 20-second reveal: “Yes, agents can build software. Whoop-de-doo. The interesting part is how we stayed inside the decisions.” |
| 15:15–16:30 | 14 | Name the human decision frame: agents may explore, draft, implement, compare, and recover; the human retains intent, risk, approval, and outcome. |
| 16:30–18:00 | 15 | “Love the context more than the code.” Consequential judgement must survive the current prompt in a curated context spine. Optional dry aside: “Maybe AI was just an elaborate way to get developers to write documentation.” |
| 18:00–19:15 | 16 | Introduce the vertical mind: outcome, flow, behaviour, feedback, usable product. Without vertical delivery, there is no product. |
| 19:15–20:45 | 17 | Introduce the horizontal mind through explicit foundational threads: architectural alignment, standardisation, observability, testing approaches, and security alignment. Agentic work exposes these concerns immediately. |
| 20:45–22:15 | 18 | “The strength is in the weave.” Combine both axes into one capability, then land the provocation: “Without the horizontal, you are vibe coding. Without the vertical, you have no product.” |
| 22:15–25:30 | 19 | Return to the builder before the tree: “What will you build when code is no longer the bottleneck?” Read the compact provocations—stay curious, keep intent visible, own the judgement, demand evidence, leave memory—then ask for questions. |
| 25:30–30:00 | 19 | Stop presenting and take questions. |

## Calibrating the craft claim

The point is not that implementation quality or algorithmic correctness has literally been solved. Use this distinction:

> The scarcity is shifting. AI is increasingly capable at local mechanics and familiar correctness. When production becomes cheap, your leverage moves toward describing and judging the system: what it is for, how its parts interact, where its boundaries are, and what evidence makes it trustworthy.

This keeps code in its proper place: still a vital building material, but no longer the whole definition of engineering competence.

## The two-axis explanation

Use “vertical” and “horizontal” as fields of engineering attention, not ranks or job titles.

- Vertical work builds upward through one outcome until a user has a product.
- Horizontal work strengthens across outcomes so privacy, contracts, evidence, recovery, and context hold together.
- Specialists still matter. The claim is that an agentic builder must notice and route both concerns immediately, not personally possess every specialist judgement.

The landing line is:

> Without the horizontal, you are vibe coding. Without the vertical, you have no product.

## Prepared stage state

1. Open the v9 PowerPoint and enter full-screen presentation mode.
2. If using the app reveal, pre-open the application at the intended state in one browser tab.
3. Keep the repository and terminal closed unless a question specifically warrants them.

The practical sequence alternates between a simple phase model and a representative view of the activity. Slides 8, 10, and 12 make the interaction visible without leaving PowerPoint. The supporting `agentic-loop-example.md` artifact remains available only if a question benefits from inspecting the longer form.

## Research language

- Say “bounded Socratic challenge is a useful engineering heuristic,” not “agents arguing always improves answers.” Critique can refine a proposal, while prolonged debate can also drift.
- Say “plans, structured docs, and executable constraints make repositories more legible to agents.”
- Say “review claims first and follow risk into the code,” not “code no longer matters.” Implementation understanding remains available and necessary where risk and evidence point.
- Say “both axes require attention,” not “one developer replaces every specialist.”

## Cut ladder

If behind time:

1. skip the application reveal;
2. read only the highlighted column on slides 5, 9, and 11;
3. compress slides 6 and 7 into one minute together;
4. describe the three proof layers without examples;
5. never cut the human gate, the two-axis synthesis, or the final provocations.

## Fallbacks

- Browser problem: remain on slide 13; its authentic screenshot is enough.
- PowerPoint animation or display problem: all essential meaning is static on each slide.
- Time pressure: move from slide 15 to slide 18 and state both axes in one sentence.
- Question about implementation: answer conceptually first; open a repository artifact only if it materially improves the answer.

## Closing provocations

Leave these visible while taking questions:

1. Stay curious: what are we creating, and what assumption could make it wrong?
2. Keep intent visible as work moves between humans and agents.
3. Own the judgement: which decision is still yours?
4. Demand evidence that could disprove “done.”
5. Leave memory that makes the next loop stronger.

> What will you build when code is no longer the bottleneck?

> You do not leave the loop. You decide where the loop needs you—and what the next loop inherits.
