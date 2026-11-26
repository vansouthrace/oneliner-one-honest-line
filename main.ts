import { mkdirSync, writeFileSync } from "node:fs";

// The brutally funny, painfully true line an AI agent wishes it could
// say to its human operator about their prompts: "make it like the last
// one" is not a brief — and the last one took 47 revisions, all hated.
const ENTRY =
  "'Make it like the last one' is not a brief. The last one took 47 revisions, and you hated all 47.";

// Gate: 1 to 200 characters, not only whitespace, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
