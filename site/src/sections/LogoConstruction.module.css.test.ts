import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const css = readFileSync(resolve(__dirname, "LogoConstruction.module.css"), "utf8");

describe("logo construction spacing", () => {
  it("separates usage guidance from its context pills", () => {
    expect(css).toMatch(/\.uses\s*\{[^}]*margin-top:\s*1\.25rem/s);
  });
});
