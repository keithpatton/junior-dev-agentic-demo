# Invariants

These are the repository’s “physics”: rules that should remain true across future changes.

1. **Human accountability remains explicit.** Product promises, material tradeoffs, and approvals are attributable to a human decision.
2. **Challenge is evidence-seeking.** A reviewer may reject or request revision, but findings must point to criteria, source material, code, tests, or observed behaviour.
3. **No plan approves itself.** For material work, the author of the latest plan revision does not approve that same revision when an independent path is available.
4. **Proof is layered.** A unit test may prove one contract; it does not silently stand in for browser, integration, operational, or user-outcome evidence.
5. **The spine describes the present.** Historical debate belongs in the plan trail, not in current context files.
6. **The framework is model-agnostic.** Core behaviour is expressed in Markdown and filesystem conventions, not one provider’s hidden state.
7. **Complexity must earn its cost.** Trivial work may bypass the formal lifecycle; material or ambiguous work may not bypass it silently.
8. **Private notes remain private in the finished application.** Free-text notes are neither persisted nor exported, and this claim is executable.
