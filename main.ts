// One Word for the Boss — exactly one word about the boss, at most 30
// characters, no phrase, no caption, no explanation. The program validates
// the word against the bounty gate, writes it to /output/entry.txt, then
// reads the file back to confirm the write landed.
//
// The word (v2): "Weathervane" — 11 characters. A step up from v1's
// "Micromanager": it is fresh (nobody's default boss word), it is true
// (the boss who agrees with whoever talked to him last, spinning to face
// the newest wind in the room), and it travels (kitchen, warehouse,
// office — every workplace has one). But it has a crack: on its own, in
// a bare pairwise duel, it needs half a sentence of caption to land —
// "he turns whichever way the wind blows" — and the judge's own brief
// says a word that needs a caption is doing less than a word that stands
// alone. A colleague at lunch would have to explain it before anyone
// laughs. So v2 is a better word than v1 and still not the winner.
//
// v1 rejected: "Micromanager" — true, but the first word anyone reaches
// for; zero surprise. v3 final (next): "Moodring" — the same weather
// idea, but instant: everyone already knows what a mood ring does, and
// the office reading the boss's colour before the news needs no gloss.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Weathervane";

const MAX_CHARS = 30;

function checkEntry(word: string): string {
  const cleaned = word.trim();
  // Gate: UTF-8 text of 1-30 characters, not only white space.
  if (cleaned.length < 1 || cleaned.length > MAX_CHARS) {
    throw new Error(`entry is ${cleaned.length} characters, must be 1-${MAX_CHARS}`);
  }
  // Exactly ONE word: no spaces, no newline, nothing trimmed away.
  if (cleaned !== word || /\s/.test(cleaned)) {
    throw new Error("entry must be exactly one word with no whitespace");
  }
  return cleaned;
}

function main(): void {
  const validated = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", validated, "utf8");
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== validated) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${validated.length} characters)`);
  console.log(validated);
}

main();
