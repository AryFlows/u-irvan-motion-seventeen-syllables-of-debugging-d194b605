// Seventeen Syllables of Debugging — one haiku about debugging, 5-7-5.
// Writes entry.txt to $MAKEFUN_OUTPUT_DIR (or /output as a fallback).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "Three a.m. cursor",
  "blinks at the breakpoint I set",
  "the bug: a typo",
].join("\n");

// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
// Syllable shape, counted by hand: 5 / 7 / 5.
//   "Three(1) a.m.(2) cur-sor(2)" = 5
//   "blinks(1) at(1) the(1) break-point(2) I(1) set(1)" = 7
//   "the(1) bug(1) a(1) ty-po(2)" = 5
// The turn lands in the last line: a whole night at the breakpoint,
// and the bug was only ever a typo.
const lines = haiku.split("\n");
if (lines.length !== 3) throw new Error("haiku must be three lines");
if (haiku.length < 1 || haiku.length > 200) throw new Error("haiku must be 1-200 characters");
if (!haiku.trim()) throw new Error("haiku must not be only whitespace");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
console.log(`wrote entry.txt (${haiku.length} characters)`);
