import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pairs = [
  ["src/theme/theme.css", "dist/theme.css"],
  ["src/theme/base.css", "dist/base.css"],
  ["src/theme/fonts.css", "dist/fonts.css"],
];

await mkdir(resolve(root, "dist"), { recursive: true });
for (const [from, to] of pairs) {
  await copyFile(resolve(root, from), resolve(root, to));
  console.log(`Copied ${from} -> ${to}`);
}
