# 02 — Proposed plan, revision 1

## Outcome

Turn passive application tracking into one visible next action with an explanation.

## Proposed scope

- keep a local list of applications;
- derive a recommendation from status and dates;
- explain why the action is recommended;
- preserve add, edit, delete, reload, and download behaviour.

## Proposed architecture

- browser-only application;
- deterministic recommendation function;
- browser storage for continuity;
- JSON download for portability.

## Proposed proof

- unit tests for recommendation rules;
- browser exercise of the primary flow;
- confirm saved records survive reload.

## Assumptions requiring challenge

- dates are sufficiently complete to recommend an action;
- saving and downloading the same application object is acceptable;
- a passing recommendation test is enough evidence of useful behaviour.
