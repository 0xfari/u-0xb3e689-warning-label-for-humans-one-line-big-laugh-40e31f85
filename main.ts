import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Warning Label for Humans: One Line, Big Laugh — one single-line safety
// warning label for humans, at most 160 characters, written to
// /output/entry.txt.
// The turn lands in the last three words: trust the flames, not the human.
// One line, one idea: the human lies about being fine, the fire does not.
const LINE =
  "WARNING: this human will say 'I'm fine' while visibly on fire. Believe the flames, not the human.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
