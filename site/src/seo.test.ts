import { describe, it, expect } from "vitest";
// Import the static SEO files as raw text via Vite's `?raw` loader so the test
// stays free of Node built-ins (keeps it type-checkable under `tsc -b`).
import html from "../index.html?raw";
import sitemap from "../public/sitemap.xml?raw";
import robots from "../public/robots.txt?raw";

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

describe("crawl files in public/", () => {
  it("sitemap lists the canonical URL", () => {
    expect(sitemap).toContain("<loc>https://openwdl.github.io/brand/</loc>");
  });

  it("robots.txt allows crawling and points at the sitemap", () => {
    expect(robots).toMatch(/User-agent: \*/);
    expect(robots).toContain(
      "Sitemap: https://openwdl.github.io/brand/sitemap.xml",
    );
  });
});
