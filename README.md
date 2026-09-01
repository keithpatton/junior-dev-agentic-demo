# Product journey starting point

This branch is the clean starting point for the JuniorDev Auckland talk **Beyond the Prompt**.

The product has not been designed or implemented. Its entire seed is:

> Build a job application tracker for junior developers.

> **The valuable unit of agentic engineering is not the prompt. It is the loop.**

## Start here

Open [`presentation/journey/prompts/00-start.md`](presentation/journey/prompts/00-start.md) and give that prompt to the coding agent.

The agent must interrogate the product idea, update the journey log, create and challenge a plan, and stop for human approval before implementation. Later prompts add implementation review, proof, and a curated context-spine update.

Do not inspect the finished `main` branch, historical rehearsal applications, validation runs, deck content, or final screenshots while planning. They are sealed fallbacks, not product requirements.

## Repository map

```text
.
├── AGENTS.md                         # model-agnostic routing instructions
├── docs/
│   ├── spine/                        # current product and system meaning
│   ├── research/                     # evidence and calibrated claims
│   └── validation/                   # empirical rehearsal results
├── plans/                            # reusable Task Automation Framework
├── presentation/
│   ├── Beyond-the-Prompt-JuniorDev.pptx  # sealed talk fallback during discovery
│   ├── SPEAKER-GUIDE.md
│   ├── journey/                      # real prompts, discussion, decisions and evidence
│   ├── planning/                     # talk-specific planning trail
│   ├── assets/                       # presentation-only imagery and screenshots
│   └── rehearsal/                    # historical prepared states
└── validation/runs/                  # sealed empirical validation archive
```

## The lifecycle

The repository’s reusable lifecycle is:

**interrogate → plan → challenge → approve → build → challenge → prove → remember**

Use the full loop for ambiguous, consequential, risky, cross-cutting, or resumable work. Keep small reversible work small.

## What this does not claim

- that every task needs multiple agents or seven Markdown files;
- that model-native planners and goals are not useful;
- that debate automatically produces truth;
- that documentation is evidence by itself;
- that code-level knowledge no longer matters.

The repo-owned layer adds portable context, tailored gates, explicit decision ownership, and a durable record around whichever model performs the implementation.

The finished, verified application remains available on `main` as the presentation fallback.
