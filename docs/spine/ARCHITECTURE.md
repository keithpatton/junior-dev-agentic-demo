# Architecture

This repository contains one root application and three supporting subsystems.

## Subsystems

- the repository root owns the finished Apply / Forward application;
- `/docs` owns the current product and system meaning;
- `/plans` owns the reusable task lifecycle and its artifact templates;
- `/presentation` owns the final deck, presenter runbook, prepared on-stage evidence, imagery, and talk research.

## Dependency direction

```text
presentation research ─────► talk claims
context spine ─────────────► plans and agent routing
plans + app ────────────────► prepared demo evidence
prepared demo evidence ────► presentation
```

The presentation may summarise other subsystems. It must not become their only source of truth.

## Important seams

- current meaning versus historical task trail;
- finished product versus curated presentation evidence;
- public, model-agnostic guidance versus tool-specific convenience;
- automated evidence versus presenter interpretation.

## Change rule

Prefer links and small authoritative files over duplicated explanation. If a change alters a boundary or dependency above, update this file in the same task.
