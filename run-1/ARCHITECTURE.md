# Architecture

The app is a static browser product with no build step or server-side dependency.

- `index.html` defines the masthead, summary, recommendation region, ledger, and entry dialog.
- `styles.css` provides an editorial field-journal presentation suitable for a projector.
- `app.js` owns four responsibilities: application state, browser persistence, deterministic recommendation policy, and DOM rendering/events.

The key flow is: storage → in-memory applications → recommendation and rendered view. Form/status/delete events update memory, then storage, then render. Export currently serialises the in-memory list directly.

The main architectural pressure is boundary policy. Persistence and export should not receive an unrestricted domain object once fields have different privacy expectations. Phase 5 should introduce explicit serialisation at those seams rather than scatter field deletion through the UI.
