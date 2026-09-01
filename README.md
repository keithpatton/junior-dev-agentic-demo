# Apply / Forward

This repository is both a small job-application product and the evidence base for the JuniorDev Auckland talk **Beyond the Prompt**.

The application is the product. The talk follows its real journey from an incomplete idea to an approved, implemented, challenged, proved, and remembered system change.

> **The valuable unit of agentic engineering is not the prompt. It is the loop.**

## Run the application

The finished application lives at the repository root.

```bash
npm test
npx serve .
```

Then open the local URL printed by the server.

The product helps a junior developer answer **“What should I do next?”** across active job applications. Personal notes are session-private and are excluded from persistence and download boundaries.

## Start the recorded journey

Open [`presentation/journey/prompts/00-start.md`](presentation/journey/prompts/00-start.md) and give that prompt to the coding agent.

The agent must interrogate the product idea, update the journey log, create and challenge a plan, and stop for human approval before implementation. Later phases add implementation review, proof, and a curated context-spine update.

## Repository map

```text
.
├── index.html, app.js, styles.css    # finished Apply / Forward product
├── data-boundaries.js                # privacy projections
├── privacy.test.js                   # executable privacy evidence
├── AGENTS.md                         # model-agnostic routing instructions
├── docs/
│   ├── spine/                        # current product and system meaning
│   ├── research/                     # evidence and calibrated claims
│   └── validation/                   # empirical rehearsal results
├── plans/                            # reusable Task Automation Framework
├── presentation/
│   ├── Beyond-the-Prompt-JuniorDev.pptx
│   ├── SPEAKER-GUIDE.md
│   ├── journey/                      # real prompts, discussion, decisions and evidence
│   ├── planning/                     # talk-specific planning trail
│   ├── assets/                       # presentation-only imagery and screenshots
│   └── rehearsal/                    # historical prepared states
└── validation/runs/                  # independent empirical validation runs
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
