# Architecture

Signal Desk is a static browser app: semantic HTML, one stylesheet, and a small JavaScript state/render loop.

State loads from one versioned local-storage key. Every form, stage, or delete event changes the in-memory collection, replaces stored state, and renders metrics, recommendation, and pipeline. The decision policy scores eligible applications from stage and deadline signals. Export serialises application data to a browser download.

The architectural seam to strengthen is serialisation. Notes have a different privacy policy from company, role, stage, deadline, and next action, so persistence and export require explicit boundary projections rather than whole-object reuse.
