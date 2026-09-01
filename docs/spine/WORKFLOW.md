# Workflow

## Ordinary changes

For small, low-risk, well-understood work:

1. read the relevant spine source;
2. make the bounded change;
3. run proportionate verification;
4. update the spine only if current meaning changed.

## Material changes

For ambiguous, risky, cross-cutting, or long-running work, follow [`../../plans/README.md`](../../plans/README.md):

**interrogate → plan → challenge → approve → build → challenge → prove → remember**

## Evidence order

Use the strongest relevant combination:

1. static contracts and structural checks;
2. focused unit or property tests;
3. integration or boundary tests;
4. browser or real runtime behaviour;
5. operational evidence such as logs, traces, and metrics;
6. explicit user validation of the intended outcome.

No layer automatically substitutes for a stronger layer when the stronger claim is being made.

## Remembering

At close-out:

- update current spine files if present meaning changed;
- record approved deferrals, unresolved risk, recovery knowledge, or surprising evidence in task notes;
- do not duplicate an obvious file-by-file change summary that Git already preserves.
