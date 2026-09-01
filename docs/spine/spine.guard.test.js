import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const spineDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(spineDirectory, "../..");
const requiredSources = [
  "PRODUCT.md",
  "ARCHITECTURE.md",
  "INVARIANTS.md",
  "GLOSSARY.md",
  "DIRECTION.md",
  "WORKFLOW.md",
];

test("the complete context spine exists", async () => {
  for (const source of requiredSources) {
    const contents = await readFile(resolve(spineDirectory, source), "utf8");
    assert.match(contents, /^#\s+\S/m, `${source} needs a top-level heading`);
  }
});

test("AGENTS.md routes readers to every spine source", async () => {
  const routingGuide = await readFile(resolve(repositoryRoot, "AGENTS.md"), "utf8");

  for (const source of requiredSources) {
    assert.match(
      routingGuide,
      new RegExp(`docs/spine/${source.replace(".", "\\.")}`),
      `AGENTS.md does not route to ${source}`,
    );
  }
});

test("relative Markdown links in the spine resolve", async () => {
  const markdownLink = /\[[^\]]+\]\((?!https?:|#)([^)]+)\)/g;

  for (const source of ["README.md", ...requiredSources]) {
    const sourcePath = resolve(spineDirectory, source);
    const contents = await readFile(sourcePath, "utf8");

    for (const match of contents.matchAll(markdownLink)) {
      const target = match[1].split("#", 1)[0];
      await assert.doesNotReject(
        access(resolve(dirname(sourcePath), target)),
        `${source} links to missing ${target}`,
      );
    }
  }
});
