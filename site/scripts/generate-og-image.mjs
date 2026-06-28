/**
 * Generates the 1200x630 social share image (og:image) used by Open Graph and
 * Twitter cards. The card is the teal+white full OpenWDL lockup centered on the
 * brand gray-900 background with a subtle dotted-grid texture.
 *
 * Run on demand with `npm run generate:og`. The output is committed to
 * public/og-image.png; this script is intentionally NOT part of `vite build`,
 * since the image is static and rarely changes.
 *
 * Text is omitted on purpose: the full lockup already contains the wordmark, so
 * we avoid depending on a system font being available to sharp's SVG renderer.
 */

import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const logoPath = resolve(
  here,
  "../../assets/png/full-cyan-logo-white-text@4x.png",
);
const outPath = resolve(here, "../public/og-image.png");

const W = 1200;
const H = 630;
// Source logo is 1560x404; preserve that aspect ratio at a comfortable width.
const logoW = 760;
const logoH = Math.round((logoW * 404) / 1560); // 197
const logoX = Math.round((W - logoW) / 2); // 220
const logoY = Math.round((H - logoH) / 2); // 217

// Embed the logo as a base64 data URI so the whole card is one self-contained SVG.
const logoBase64 = readFileSync(logoPath).toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1.5" fill="#10131c" />
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#0a0c12" />
  <rect width="${W}" height="${H}" fill="url(#dots)" />
  <image href="data:image/png;base64,${logoBase64}" x="${logoX}" y="${logoY}" width="${logoW}" height="${logoH}" />
</svg>`;

mkdirSync(dirname(outPath), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`Wrote ${outPath} (${W}x${H})`);
