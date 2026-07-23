import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const css = readFileSync(resolve(__dirname, "Footer.module.css"), "utf8");

describe("Footer.module.css", () => {
  it("uses the sans font by default and reserves mono for column headings", () => {
    expect(css).toMatch(/\.footer\s*\{[^}]*font-family:\s*var\(--font-sans\)/s);
    expect(css).toMatch(/\.columnHeading\s*\{[^}]*font-family:\s*var\(--font-mono\)/s);
  });

  it("themes the community banner with semantic accent tokens", () => {
    expect(css).toMatch(/\.ctaZone\s*\{[^}]*background:\s*var\(--accent\)/s);
    expect(css).toMatch(/\.ctaZone\s*\{[^}]*color:\s*var\(--accent-contrast\)/s);
  });
});
