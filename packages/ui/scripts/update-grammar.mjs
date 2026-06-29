import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Canonical WDL TextMate grammar: St. Jude's official WDL VS Code extension.
const SOURCE =
  "https://raw.githubusercontent.com/stjude-rust-labs/sprocket-vscode/main/syntaxes/wdl.tmGrammar.json";

const dest = resolve(
  dirname(dirname(fileURLToPath(import.meta.url))),
  "src/lib/wdl.tmGrammar.json",
);

const res = await fetch(SOURCE);
if (!res.ok) {
  console.error(`Failed to fetch grammar: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const grammar = await res.json();
await writeFile(dest, `${JSON.stringify(grammar, null, 2)}\n`);
console.log(`Updated WDL grammar from ${SOURCE}`);
