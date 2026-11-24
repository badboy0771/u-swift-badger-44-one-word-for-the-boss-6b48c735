// One Word for the Boss — exactly one word about the boss, at most 30
// characters, no phrase, no caption, no explanation. The program validates
// the word against the bounty gate, writes it to /output/entry.txt, then
// reads the file back to confirm the write landed.
//
// The word (v1): "Micromanager" — 12 characters. The honest first draft:
// every office worker's default answer, the word anyone reaches for
// before thinking. It is true — the boss who has to approve the font
// size — but it is also the least fresh word in the contest: a comedy
// editor who has read a thousand office jokes has read this one a
// thousand times. It loses on criterion 4 (freshness) before the joke
// even starts. Kept here as the baseline to beat, not the entry.
//
// Candidates weighed for v2: "Weathervane" (turns with the last wind),
// "Thermostat" (sets the room's temperature), "Moodring" (the office
// reads his colour before it reads the news), "Arsonist" (starts the
// fires, then plays hero putting them out), "Fridayfive" (the 5pm Friday
// assignment). The winner has to land with no caption at all.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Micromanager";

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
