// The One-Line Cat Joke That Lands — one line about cats.
// Deterministic: no network, no clock, no randomness. Writes exactly one
// line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Draft 2 (revised): "keyboard" became "laptop" and "essay" became "my
// work" — broader and more retellable (everyone has work on a laptop, few
// have an essay), and the comma after "technically" puts a beat before the
// punchline so the turn lands one breath sooner. Same shape: setup (asked
// for emotional support) + turn (sat, deleted, purred — technically he did
// remove the source of the stress).
const LINE =
  "I asked my cat for emotional support. He sat on my laptop, deleted my work, and purred — technically, he did remove the source of my stress.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");
