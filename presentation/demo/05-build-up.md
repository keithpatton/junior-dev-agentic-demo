# 05 — Build upward: one product slice

## User outcome

The application answers:

> What should I do next?

## End-to-end slice

```text
application data
      ↓
deterministic recommendation
      ↓
visible action + reason
      ↓
status change updates the recommendation
```

This is “building up”: a user-facing capability runs through data, decision logic, rendering, and interaction.

## Supporting implementation

The deterministic recommendation logic lives in [`../../app.js`](../../app.js). It is a reference for questions, not part of the prepared on-stage path. The running application may be shown for no more than 20 seconds near the end of the deck.

The interesting question is not whether the agent could produce the interface. It is whether the product behaviour corresponds to an approved outcome and remains legible enough to challenge.
