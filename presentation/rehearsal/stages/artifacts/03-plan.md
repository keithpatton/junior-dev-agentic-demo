# Approved implementation plan

## Outcome

Replace passive tracking as the primary experience with a clear answer to “What should I do next?”

## In scope

- derive one recommended next action from application status and dates;
- explain the recommendation in plain language;
- keep the existing application list and editing flow;
- preserve local operation and existing saved data.

## Non-goals

- accounts, cloud sync, collaboration, recruiter features;
- machine-learning ranking;
- automatic email or calendar actions.

## Boundaries and contracts

- UI requests a recommendation from application data;
- recommendation logic is deterministic and testable;
- persistence owns the durable projection of an application;
- export owns the shareable projection;
- free-text notes are not yet claimed to be private until that invariant is designed and proved.

## Acceptance criteria

- the screen names one next action;
- the reason is visible;
- changing status or dates can change the recommendation;
- ordinary saved data survives reload;
- existing application management still works.

## Validation

- test the recommendation rules at meaningful boundaries;
- exercise add, update, recommend, and reload in the browser;
- inspect persistence and export separately before making privacy claims.
