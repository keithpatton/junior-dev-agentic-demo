# Plan v2: One living example

## Decision

Do not stage a binary “one-shot bad, framework good” comparison.

Use one junior-developer job application tracker as a living example. Follow one meaningful product change from an imprecise idea through interrogation, planning, challenge, approval, implementation, proof, and retained context.

The audience should judge the method by what becomes visible and controllable at each stage, not by a contrived failure in a control application.

## Communication job

By the end, junior developers should see that agentic engineering is not mainly about producing code faster: it is about creating a change process in which human intent, judgement, approval, evidence, and system memory remain visible.

## Core idea

> The valuable unit is not the prompt. It is the loop.

The Task Automation Framework is a small, repository-owned change loop around the model:

- a curated context spine describes the system as it is now;
- planning artifacts make the proposed change inspectable before code exists;
- structured challenge looks for unsupported assumptions, seams, and failure modes;
- human approval owns consequential decisions;
- implementation review and proof test the real system rather than trusting fluent output;
- accepted learning updates the spine so the next task starts from better context.

Native model planners, goals, and subagents can operate inside this lifecycle. They do not remove the value of a durable, model-agnostic record that a team can review and tailor.

## The living example

### Starting idea

> Build a job application tracker for a junior developer.

The talk does not present this as a foolish prompt. It presents it as an incomplete but normal product idea.

### Interrogation changes the problem

The planner asks what outcome matters, who is using it, what information is sensitive, and what “done” would mean.

The important reframing is:

> The user does not merely need a list of applications. They need help deciding: “What should I do next?”

### Planning makes judgement visible

The plan turns the discussion into a proposed product change with:

- an outcome and bounded scope;
- acceptance criteria;
- system seams and dependencies;
- privacy and data-handling assumptions;
- a validation path;
- explicit questions requiring human approval.

Only decisive excerpts appear on slides. The complete artifacts remain available in the repository.

### Socratic challenge improves the plan

A separate review pass challenges the plan rather than simply extending it:

- Why is this the right next action?
- What assumption supports the ranking?
- What happens when data is missing or stale?
- Can personal notes leak into export?
- What evidence would change our confidence?

Socrates is the memorable explanation for structured challenge, not a claim that debate automatically produces truth.

### Approval preserves human agency

The agent does not approve its own material product, privacy, architecture, or scope decisions. Keith reviews the challenged plan and authorises implementation.

### Implementation is powerful but still reviewed

The agent builds the approved change. Review then looks across product behaviour and system seams rather than reading every generated line aloud.

The evidence beat uses two real findings from rehearsal:

- a privacy invariant and automated test prevent personal notes from appearing in export;
- unit tests once passed while browser module loading failed, so browser proof remained necessary.

### Remember closes the loop

Accepted product meaning, architecture, invariants, glossary, direction, and workflow are curated back into the context spine. The historical plan and evidence trail remain separate.

The spine is the living system’s current shape; the task trail records how and why it changed.

## What makes the TAF useful

The framework is valuable when a task is ambiguous, consequential, cross-cutting, risky, or likely to be handed between people or models.

It provides:

- **portability** — the lifecycle is not tied to one vendor or model;
- **inspectability** — people can see and challenge intent before implementation;
- **continuity** — decisions and system learning survive the chat session;
- **tailoring** — teams can add relevant product, security, architecture, documentation, or operational checks;
- **proportional control** — small work can remain lightweight while consequential work receives stronger gates;
- **resumability** — another person or agent can continue from explicit state and evidence.

## Where the TAF can go wrong

- Markdown volume can impersonate understanding.
- A stale spine can be worse than no spine.
- Multiple agents can reinforce the same bad assumption.
- Review can become ceremony without evidence or decision rights.
- Applying the full lifecycle to trivial changes creates waste.

Guardrails:

- use the loop only when the change warrants it;
- keep artifacts short and decision-oriented;
- cap challenge rounds;
- require evidence or acceptance criteria for blocking findings;
- name the human decision owner;
- update the spine only with accepted, durable learning;
- prefer working proof over additional prose.

## Narrative sequence and timing

| Time | Beat | Evidence or visual |
| --- | --- | --- |
| 0:00–0:50 | Promise: keep your judgement while agents do more of the building | Minimal title/opening |
| 0:50–2:30 | Personal history: enormous books, hand-written code, and why this change is larger than autocomplete | Editorial timeline |
| 2:30–3:45 | The claim: the valuable unit is the loop, not the prompt | Single hard-hitting statement |
| 3:45–5:15 | One living idea: a job application tracker | Existing prepared app / product image |
| 5:15–8:00 | Interrogate: “What should I do next?” emerges | Selected prompt and discussion excerpts |
| 8:00–10:00 | Plan: turn intent into an inspectable proposal | Selected plan excerpts |
| 10:00–12:00 | Challenge: Socratic adversary asks what the plan is assuming | Socratic image and review excerpts |
| 12:00–13:00 | Approve: the consequential decision remains human | Approval artifact |
| 13:00–15:30 | Build: the agent implements the approved change | Prepared evolved app |
| 15:30–18:00 | Challenge and prove: privacy invariant plus browser reality | Test evidence and one recovery story |
| 18:00–20:00 | Remember: curate durable learning into the context spine | Bonsai/context-spine visual |
| 20:00–22:00 | Why keep your own loop when models already plan? | Portable lifecycle and trade-offs |
| 22:00–23:45 | Grow the product; strengthen the system | Product growth versus system foundations |
| 23:45–25:30 | The agentic builder: more reach, more responsibility | Gardener-builder visual and practical close |
| 25:30–30:00 | Questions | Return to opening promise |

## Slide and demo discipline

- No “bad app versus good app” scorecard.
- No live generation.
- The prepared app is revisited as the same product evolving through the lifecycle.
- Show the original prompt, selected interrogation, one plan decision, one challenge, the approval, the implemented outcome, and the proof.
- Use the terminal only if the privacy test is run; otherwise show prepared evidence.
- Refer to TAF by name once, then call it “the loop” in most spoken explanation.
- Mention skills as specialists the lifecycle can route to, not another concept to teach.

## Engineering role shift

The role change follows from the example rather than becoming a speculative opening claim.

Agents lower the cost of product growth. The engineer’s leverage increasingly comes from:

- shaping product intent;
- curating system context;
- designing boundaries and dependencies;
- defining invariants and evidence;
- connecting product, architecture, operations, and risk;
- deciding what should change and what must remain true.

Use **grow the product / strengthen the system** in speech. Avoid horizontal/vertical axis terminology because teams interpret those axes differently.

The conclusion is not “knowledge no longer matters.” It is:

> Code-level understanding remains useful, but it is no longer sufficient. Curiosity, intentionality, judgement, and system thinking let you operate at a larger scale.

## Approval gate

Stop before deck authoring until Keith approves or revises:

1. the living-example narrative;
2. the core claim that the valuable unit is the loop;
3. the balanced TAF positioning and trade-offs;
4. the 25:30 content cut-off;
5. privacy proof as live-optional or prepared evidence only.
