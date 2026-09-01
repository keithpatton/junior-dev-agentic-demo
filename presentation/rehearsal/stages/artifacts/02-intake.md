# Intake: ready to plan

## Intended outcome

A junior developer can open the tracker and immediately identify the single most useful next action across active applications.

## User and operating context

- one person;
- local browser use;
- several concurrent applications;
- no shared account, recruiter workflow, or team reporting.

## Decisions resolved before implementation

- “Useful” means recommending a next action, not adding more fields.
- Recommendations must explain why an action is suggested.
- The smallest useful release can use deterministic rules rather than predictive scoring.

## Remaining risks

- dates and stale applications can produce misleading recommendations;
- sensitive notes may cross persistence or export boundaries;
- a recommendation without transparent reasoning could create false authority.
