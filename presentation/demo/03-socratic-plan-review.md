# 03 — Socratic challenge of plan revision 1

**Verdict:** revise before approval.

The reviewer is not asked whether the plan sounds sensible. The reviewer is asked to falsify it against the intended outcome, system boundaries, and proposed evidence.

## Finding 1 — the recommendation may manufacture confidence

**Question:** What happens when dates are missing or stale?

**Why it matters:** A definitive-looking recommendation could be less useful than admitting uncertainty.

**Required revision:** define deterministic fallbacks and keep the reason visible.

## Finding 2 — whole-object convenience silently creates a privacy policy

**Question:** Which fields cross persistence and download boundaries?

**Why it matters:** Free-text notes may contain interview impressions or personal reminders. Saving and exporting the whole object makes those notes durable and shareable by default.

**Required revision:** do not claim notes are private yet. Make persistence and download separate explicit projections and prove the boundary later.

## Finding 3 — the evidence is too narrow

**Question:** What would disprove completion after the unit tests pass?

**Why it matters:** Module loading, browser storage, reload, and rendering are outside a recommendation-unit test.

**Required revision:** add browser behaviour and reload evidence; keep remaining risk visible.

## Review rule

> Proposal, challenge, decision, and proof have different jobs.

The critique cites a criterion or observable failure mode. It does not argue for the sake of debate.
