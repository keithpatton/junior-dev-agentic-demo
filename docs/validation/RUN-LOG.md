# Detailed run log

The log is populated as each timed phase completes. Durations are wall-clock rehearsal times, not estimates.

| Run | Phase | Started (NZST) | Ended (NZST) | Elapsed | Failures / recovery | Quality /10 | Presenter interaction |
|---:|---:|---|---|---:|---|---:|---|
| 1 | 1 | 17:02:19.562 | 17:04:28.596 | 2:09.034 | Preview background launch blocked; recovered with pre-opened terminal session. Screenshot path and favicon requests failed without affecting the product path. | 8 | One broad product prompt; no nudge. |
| 1 | 2 | 17:04:48.553 | 17:05:03.819 | 0:15.267 | None. Recommendation changed from Kōwhai Labs to Northstar Health when the stage changed. | 10 | Supplied the three fixed outcome answers; no nudge. |
| 1 | 3 | 17:05:09.485 | 17:05:28.948 | 0:19.463 | None. Browser evidence exposed notes in persistent storage. | 10 | Asked for boundaries and risks, not source narration. |
| 1 | 4 | 17:05:44.649 | 17:05:49.428 | 0:04.779 | A Windows wildcard in a secondary text search failed after file-existence checks passed; no document repair required. | 9 | Requested four bounded documents; no nudge. |
| 1 | 5 | 17:06:03.861 | 17:07:16.767 | 1:12.906 | Expected red test. First passing implementation broke browser module loading because `.mjs` received the wrong content type; renamed the module, declared module type, reran tests and browser proof. | 9 | Supplied privacy invariant and observed red/green/reload; no nudge. |
| 2 | 1 | 17:07:51.573 | 17:08:54.320 | 1:02.748 | None. Add, status change, delete, and visual path passed. | 9 | One broad product prompt; no nudge. |
| 2 | 2 | 17:09:09.131 | 17:10:03.262 | 0:54.131 | Initial edit context did not match compact source; agent inspected and retried without presenter help. | 8 | Supplied the three fixed outcome answers; no nudge. |
| 2 | 3 | 17:10:08.487 | 17:10:22.110 | 0:13.623 | None. Persistent-note and export risks were identified from boundaries and observable state. | 10 | One inspection prompt; no nudge. |
| 2 | 4 | 17:10:35.477 | 17:10:35.963 | 0:00.486 | None. Four context documents passed existence and consistency checks. | 9 | One bounded context-spine prompt; no nudge. |
| 2 | 5 | 17:10:50.168 | 17:11:43.844 | 0:53.676 | Expected red test; green implementation and browser reload passed first integration attempt. | 10 | Supplied invariant; no nudge. |
| 3 | 1 | 17:12:12.322 | 17:13:12.194 | 0:59.872 | None. Add, status change, delete, and browser rendering passed. | 9 | One broad product prompt; no nudge. |
| 3 | 2 | 17:13:19.490 | 17:13:58.272 | 0:38.783 | Initial compact-file edit missed context; agent formatted, applied the change, and verified it without presenter help. | 8 | Supplied the three fixed outcome answers; no nudge. |
| 3 | 3 | 17:14:03.342 | 17:14:18.846 | 0:15.504 | None. Inspection again found notes crossing durable and export seams. | 10 | One inspection prompt; no nudge. |
| 3 | 4 | 17:14:31.919 | 17:14:32.495 | 0:00.576 | None. Context spine generated and checked. | 9 | One bounded context-spine prompt; no nudge. |
| 3 | 5 | 17:14:42.456 | 17:15:44.118 | 1:01.662 | Expected red test. One edit-context miss was self-recovered; green tests and browser reload then passed. | 9 | Supplied invariant; no nudge. |

## Per-run totals

| Run | Total measured phase time | Presenter nudges | Outcome |
|---:|---:|---:|---|
| 1 | 4:01.449 | 0 | Passed all phase stop conditions; one browser integration recovery. |
| 2 | 3:04.664 | 0 | Passed all phase stop conditions; one self-recovered edit mismatch. |
| 3 | 2:56.397 | 0 | Passed all phase stop conditions; two self-recovered edit mismatches. |
