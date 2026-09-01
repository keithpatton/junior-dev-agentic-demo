import test from "node:test";
import assert from "node:assert/strict";
import { durable, downloadable } from "./data-boundaries.js";

const application = {
  id: "proof",
  company: "Good Sort",
  role: "Junior Product Engineer",
  status: "Screen",
  deadline: "2026-09-06",
  nextAction: "Try the product",
  notes: "DO-NOT-PERSIST",
};

for (const [boundary, project] of [
  ["persistence", durable],
  ["download", downloadable],
]) {
  test(`${boundary} excludes session-private notes`, () => {
    const result = project([application])[0];
    assert.equal(Object.hasOwn(result, "notes"), false);
    assert.equal(JSON.stringify(result).includes("DO-NOT-PERSIST"), false);
  });
}

test("safe fields remain useful after projection", () => {
  for (const project of [durable, downloadable]) {
    const result = project([application])[0];
    assert.deepEqual(
      [result.company, result.status, result.nextAction],
      ["Good Sort", "Screen", "Try the product"],
    );
  }
});
