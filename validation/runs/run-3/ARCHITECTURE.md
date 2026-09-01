# Architecture

Apply/Forward is a static browser application with HTML structure, CSS presentation, and a JavaScript state/render loop. It has no build step or remote application service.

One versioned local-storage value loads the application collection. User events update that collection, persist it, and re-render the summary, recommendation, and board. The ranking policy is a pure conceptual seam: stage weight plus deadline urgency. Export creates a download from application data.

Privacy requires an explicit projection at the persistence and export seams. Whole-object serialisation is the present architectural hazard because notes belong only to the current session.
