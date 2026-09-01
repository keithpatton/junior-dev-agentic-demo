# A small Task Automation Framework

This is a KISS, Markdown-first framework for material agentic work in almost any repository and with almost any capable model.

It has two nested loops:

```text
context spine
     │
     ▼
PLANNING:        interrogate → plan → challenge → approve
                                             │
                                             ▼
IMPLEMENTATION:  build ─────→ challenge → prove → remember
                                                │
                                                └──► update spine + task trail
```

The point is not more ceremony. The point is to expose decisions before they become code, make disagreement evidence-seeking, and leave enough memory for the next change.

## When to use it

Use the formal trail when work is materially ambiguous, risky, cross-cutting, long-running, or likely to require a product or architecture decision.

Do not use it for a typo, obvious one-line fix, mechanical rename, or other work whose likely failure is cheaper than the ceremony.

## Artifact layout

Create one directory per task:

```text
plans/<task-id>/
├── 00-intake.md
├── 01-plan-v1.md
├── 02-plan-review-v1.md
├── 03-approval.md
├── 04-implementation-review.md
├── 05-evidence.md
└── 06-notes.md
```

Plan revisions and reviews are append-only. Do not rewrite an earlier artifact to make the trail look cleaner.

Templates live in [`templates/`](templates/).

## Planning loop

### 1. Interrogate

Determine whether the task is ready to plan responsibly.

Capture:

- intended user and outcome;
- success signal;
- relevant sources of truth;
- context sufficiency;
- assumptions and unknowns;
- likely blast radius and system seams;
- a credible validation path;
- decisions only a human can make.

If the goal still requires product or architecture invention, stop and ask. Pushback is a successful intake result.

### 2. Plan

Write a plan that removes material design guesswork from implementation.

Include:

- goal and non-goals;
- governing context and constraints;
- proposed product and architecture decisions;
- affected boundaries and dependencies;
- invariants and guardrails;
- acceptance criteria;
- implementation sequence;
- validation strategy;
- checkpoints, stop conditions, and escalation triggers.

The plan should be precise about outcomes and constraints without micromanaging every line.

### 3. Challenge the plan

Use a fresh reviewer context when possible. The reviewer’s job is to find:

- ambiguous outcomes or acceptance criteria;
- hidden assumptions;
- contradictions with the context spine;
- missing seams, failure modes, or dependencies;
- an implementation sequence that still requires material invention;
- claims with no plausible validation path.

Every finding must state its evidence or evaluation criterion. Persuasive disagreement without evidence is not review.

The reviewer returns `pass`, `revise`, or `blocked`.

### 4. Approve

The human accepts responsibility for the product and architecture choices the agent is about to optimise.

Approval records:

- the exact plan revision;
- conditions or explicit deferrals;
- whether implementation may proceed;
- any checkpoint that still requires human input.

The author of the latest plan revision should not approve it as an “independent reviewer.” Cross-model review is optional; context separation and evidence discipline are the important properties.

## Implementation loop

### 5. Build

Implement the approved plan. Work within its scope and stop if execution reveals a missing product or architecture decision.

Normal self-review, tests, and recovery happen inside this step. The approved plan remains the contract; new insight may trigger re-planning rather than silent scope expansion.

### 6. Challenge the implementation

Review the realised system against the approved outcome, architecture, invariants, and failure modes.

Prefer high-leverage seams over an unfocused line-by-line tour:

- input and trust boundaries;
- persistence and export;
- component and service contracts;
- dependency direction;
- restart, retry, concurrency, and recovery;
- user-visible outcome and explanation;
- operational legibility.

An independent reviewer is valuable for material work. More reviewers are not automatically better; wake a specialist only when the risk justifies the cost.

### 7. Prove

Decompose completion into claims. For each claim, record the strongest relevant evidence and mark it:

- `proved`;
- `refuted`;
- `unverified`.

Use layered evidence. A passing unit test does not prove a browser or production behaviour. A polished demo does not prove an invariant.

### 8. Remember

Update the context spine when current meaning changed. Record only the execution context that code and Git history will not explain later:

- approved deferrals;
- surprising failure and recovery knowledge;
- stop/resume state;
- unresolved risk;
- why an apparently obvious alternative was rejected.

Do not write a progress diary or duplicate the diff.

## Independence without theatre

The framework can be run:

- by one model in deliberately separated passes;
- by fresh instances of the same model;
- across different model providers;
- with human reviewers at any gate;
- with subagents when the tool supports them.

The useful heuristic is not “models should argue.” It is:

> Give proposal, challenge, decision, and proof different jobs—and require each to leave inspectable evidence.

## Bounded iteration and exits

- Default to at most three plan-review rounds before asking a human to resolve the disagreement.
- Stop immediately when a finding requires a product, architecture, security, privacy, or scope decision outside the approved task.
- Stop when evidence cannot be obtained from the available environment.
- Treat escalation as the workflow working, not as failure.

## Relationship to graph engineering

This lifecycle is already a small explicit work graph: steps have allowed inputs, outputs, gates, loops, and stop conditions.

“Graph engineering” is an emerging and inconsistently used label. A graph framework may help when work branches, runs in parallel, coordinates many agents, or needs durable shared state. It is not required to gain the benefits of explicit planning, challenge, approval, evidence, and memory.
