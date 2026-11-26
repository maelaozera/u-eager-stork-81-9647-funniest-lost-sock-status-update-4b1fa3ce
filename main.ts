// Funniest Lost Sock Status Update
// Entry program for make.fun competition
// u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce
//
// The entry is a single status update, at most 120 characters, written in
// the voice of a lost sock. It is assembled from three labelled segments so
// the joke's setup, turn and punchline each stay readable and editable.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Segment one: the setup. Where the sock ended up, in status-update style.
const partOne =
  "Day 47 behind the dryer.";

// Segment two: the turn. The missing partner assumes the sock was taken.
const partTwo =
  "My partner thinks I left him.";

// Segment three: the punchline. The sock left on purpose, and says why.
const partThree =
  "Truth is, I never liked his smell anyway.";

// Why this line: the joke twists the two obvious sock cliches at once.
// The dryer did not eat the sock, and the sock did not get lost — it moved
// out on purpose. The punchline lands in the last few words, where the sock
// admits it never liked its partner's smell anyway. Small, domestic, a
// little weary, and entirely in the sock's own voice.
const MAX_LENGTH = 120;
const OUTPUT_PATH = "/output/entry.txt";

// Validate one assembled line: it must be non-empty, a single line, and
// no longer than the competition's 120-character cap.
function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Entry must not be empty or only whitespace.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `Entry is ${line.length} characters, over the ${MAX_LENGTH} limit.`,
    );
  }
}

// Join the three segments into the single status-update line.
function buildEntry(): string {
  const line = [partOne, partTwo, partThree].join(" ");
  validateLine(line);
  return line;
}

// Write the finished entry to /output/entry.txt, creating the folder first.
function writeEntry(): void {
  const entry = buildEntry();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, entry, "utf8");
  console.log(`Wrote ${entry.length} characters to ${OUTPUT_PATH}`);
  console.log(`Entry: ${entry}`);
}

writeEntry();
