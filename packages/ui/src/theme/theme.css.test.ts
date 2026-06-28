import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const css = readFileSync(resolve(__dirname, "theme.css"), "utf8");

describe("theme.css", () => {
  it("defines the primitive teal and gray scales on :root", () => {
    expect(css).toContain("--teal-500: #4bd8fa");
    expect(css).toContain("--gray-900: #0a0c12");
  });

  it("defines a dark theme as the default on :root", () => {
    expect(css).toMatch(/:root[^}]*--bg:\s*var\(--gray-900\)/s);
  });

  it("defines an explicit light theme", () => {
    expect(css).toContain('[data-theme="light"]');
    expect(css).toMatch(/\[data-theme="light"\][^}]*--bg:\s*#ffffff/s);
  });

  it("defines an explicit dark theme selector", () => {
    expect(css).toContain('[data-theme="dark"]');
  });
});
