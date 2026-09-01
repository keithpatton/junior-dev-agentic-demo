# Architecture

No product architecture has been selected or approved.

The repository already contains supporting material for the talk, but that material does not constrain the product architecture. During planning, define only the smallest technical box needed to prove the approved outcome.

## Subsystems

- the repository root will own the product after approval;
- `/docs` owns current meaning, research, and validation reports;
- `/plans` owns the reusable task lifecycle and its artifact templates.
- `/presentation` owns the final deck, presenter runbook, recorded product journey, imagery, and historical rehearsal states.
- `/validation` preserves the three independent empirical implementations behind the reliability claims.

## Dependency direction

```text
research + validation ─────► talk claims
context spine ─────────────► plans and agent routing
plans ─────────────────────► recorded journey
recorded journey + eventual app ────► presentation
```

The presentation may summarise other subsystems. It must not become their only source of truth.

## Important seams

- current meaning versus historical task trail;
- emerging product versus sealed historical rehearsal evidence;
- public, model-agnostic guidance versus tool-specific convenience;
- automated evidence versus presenter interpretation.

## Change rule

Prefer links and small authoritative files over duplicated explanation. If a change alters a boundary or dependency above, update this file in the same task.
