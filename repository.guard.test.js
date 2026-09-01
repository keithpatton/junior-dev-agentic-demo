import test from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const ignoredDirectories = new Set([".git", ".tmp", "node_modules"]);

const activePackage = [
  "index.html",
  "app.js",
  "styles.css",
  "data-boundaries.js",
  "privacy.test.js",
  "AGENTS.md",
  "docs/spine/README.md",
  "plans/README.md",
  "presentation/Beyond-the-Prompt-JuniorDev.pptx",
  "presentation/SPEAKER-GUIDE.md",
  "presentation/demo/README.md",
  "presentation/research/CLAIM-MAP.md",
  "presentation/research/READING-NOTES.md",
];

const retiredPaths = [
  "validation",
  "docs/validation",
  "docs/research",
  "presentation/archive",
  "presentation/journey",
  "presentation/planning",
  "presentation/rehearsal",
];

async function exists(relativePath) {
  try {
    await stat(path.join(root, relativePath));
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function markdownFiles(directory = root) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(absolute)));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(absolute);
  }
  return files;
}

test("the current application, spine, TAF, and presentation package exist", async () => {
  for (const relativePath of activePackage) {
    assert.equal(await exists(relativePath), true, `missing ${relativePath}`);
  }
});

test("superseded preparation trees do not reappear as active surfaces", async () => {
  for (const relativePath of retiredPaths) {
    assert.equal(await exists(relativePath), false, `retired path returned: ${relativePath}`);
  }
});

test("relative Markdown links resolve across the repository", async () => {
  const failures = [];
  const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/g;

  for (const file of await markdownFiles()) {
    const content = await readFile(file, "utf8");
    for (const match of content.matchAll(linkPattern)) {
      let target = match[1].trim().replace(/^<|>$/g, "");
      if (!target || target.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
      target = decodeURIComponent(target.split("#", 1)[0]);
      const absolute = target.startsWith("/")
        ? path.join(root, target.slice(1))
        : path.resolve(path.dirname(file), target);
      try {
        await stat(absolute);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        failures.push(`${path.relative(root, file)} -> ${target}`);
      }
    }
  }

  assert.deepEqual(failures, []);
});

test("the speaker guide carries the complete show and return sequence", async () => {
  const guide = await readFile(path.join(root, "presentation/SPEAKER-GUIDE.md"), "utf8");
  for (const slide of [4, 7, 8, 9, 10, 11, 12]) {
    assert.match(guide, new RegExp(`\\| [^\\n]*\\| ${slide} \\|`), `missing slide ${slide} cue`);
  }
  for (const phrase of [
    "The idea changed before the code did.",
    "A plan is a proposal, not permission.",
    "Challenge prepares the decision; it does not own it.",
    "Now the agent has permission to act—inside an explicit decision frame.",
    "The website is not the punchline.",
    "A passing feature is not enough if the system boundary is wrong.",
    "A proved decision helps once. A remembered decision shapes the next change.",
  ]) {
    assert.ok(guide.includes(phrase), `missing return cue: ${phrase}`);
  }
});
