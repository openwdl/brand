import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/** Read a file relative to this test module as UTF-8 text. */
const read = (rel: string) =>
  readFileSync(fileURLToPath(new URL(rel, import.meta.url)), "utf8");

const html = read("../index.html");

describe("SEO metadata in index.html", () => {
  it("has a substantive meta description", () => {
    const m = html.match(/name="description"[\s\S]*?content="([^"]+)"/);
    expect(m?.[1]?.length ?? 0).toBeGreaterThan(50);
  });

  it("declares the canonical URL", () => {
    expect(html).toContain(
      '<link rel="canonical" href="https://openwdl.github.io/brand/"',
    );
  });

  it("is marked indexable for crawlers", () => {
    expect(html).toMatch(/<meta name="robots" content="index, ?follow"/);
  });

  it("has Open Graph title, url, and image", () => {
    expect(html).toContain('property="og:title"');
    expect(html).toContain(
      'property="og:url" content="https://openwdl.github.io/brand/"',
    );
    expect(html).toContain(
      'property="og:image" content="https://openwdl.github.io/brand/og-image.png"',
    );
  });

  it("uses a large-summary Twitter card", () => {
    expect(html).toMatch(
      /name="twitter:card" content="summary_large_image"/,
    );
  });

  it("embeds valid Organization JSON-LD", () => {
    const m = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );
    expect(m).toBeTruthy();
    const data = JSON.parse(m![1]);
    expect(data["@type"]).toBe("Organization");
    expect(data.url).toBe("https://openwdl.github.io/brand/");
    expect(data.sameAs).toContain("https://github.com/openwdl/brand");
  });
});
