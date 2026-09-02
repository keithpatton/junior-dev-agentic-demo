# Apply / Forward

This repository leaves three practical takeaways:

1. a living job-application tracker at the repository root;
2. a small maintained context spine under [`docs/spine`](docs/spine/);
3. a portable Markdown-first Task Automation Framework under [`plans`](plans/).

The JuniorDev Auckland talk **Beyond the Prompt** is packaged separately under [`presentation`](presentation/). The application makes the talk concrete, but the transferable idea is how humans remain inside agentic work: shaping intent, authorising consequential decisions, evaluating evidence, and curating what the next cycle inherits.

> **The valuable unit of agentic engineering is not the prompt. It is the loop.**

## Presentation materials

Only three presentation surfaces are needed:

1. [`presentation/Beyond-the-Prompt-JuniorDev-v9.pptx`](presentation/Beyond-the-Prompt-JuniorDev-v9.pptx) — the final 19-slide delivery deck;
2. [`presentation/SPEAKER-GUIDE.md`](presentation/SPEAKER-GUIDE.md) — timings, exact show/return cues, cuts, and fallbacks;
3. [`presentation/demo/`](presentation/demo/) — the prepared Markdown, code, proof, and context excerpts shown between slides.

There is no live agent run. The application reveal is optional and lasts no more than 20 seconds.

## Run the application

The finished application lives at the repository root.

```bash
npm test
npx serve .
```

Then open the local URL printed by the server. The product helps a junior developer answer **“What should I do next?”** across active applications. Personal notes are session-private and excluded from persistence and download boundaries.

## Repository map

```text
.
├── index.html, app.js, styles.css     # finished Apply / Forward application
├── data-boundaries.js                 # explicit privacy projections
├── privacy.test.js                    # executable privacy evidence
├── AGENTS.md                          # model-agnostic routing instructions
├── docs/
│   └── spine/                         # current product and system meaning
├── plans/                             # reusable Task Automation Framework
└── presentation/
    ├── Beyond-the-Prompt-JuniorDev-v9.pptx
    ├── SPEAKER-GUIDE.md
    ├── demo/                          # the only on-stage evidence path
    ├── assets/                        # slide imagery and screenshot fallback
    └── research/                      # sources, caveats, and reading notes
```

## The lifecycle

The reusable lifecycle is:

**interrogate → plan → challenge → approve → build → challenge → prove → remember**

Use the full loop for ambiguous, consequential, risky, cross-cutting, or resumable work. Keep small reversible work small.

## What this does not claim

- that every task needs multiple agents or seven Markdown files;
- that model-native planners and goals are not useful;
- that debate automatically produces truth;
- that documentation is evidence by itself;
- that code-level knowledge no longer matters.

The repo-owned layer adds portable context, tailored gates, explicit decision ownership, and a durable record around whichever capable model performs the implementation.
