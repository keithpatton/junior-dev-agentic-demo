# Boundary review

## Seams inspected

- form state → application model;
- application model → browser persistence;
- application model → exported data;
- saved state → reload and render;
- dates and status → next-action recommendation.

## Finding

The convenient whole-object design made every new field persistent and shareable by default. Free-text notes therefore crossed two boundaries without an explicit product decision.

## Failure mode

A junior developer writes sensitive interview impressions or personal reminders, assumes they are private working notes, and later exports or retains them unintentionally.

## Challenge

Turn “notes should feel private” into an architectural rule with separate durable and shareable projections, an automated test, and a browser reload check.
