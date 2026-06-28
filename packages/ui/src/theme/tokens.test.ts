import { tokens } from "./tokens";

describe("tokens", () => {
  it("exposes teal scale values matching the CSS custom properties", () => {
    expect(tokens.color.teal[500]).toBe("#4bd8fa");
    expect(tokens.color.teal[700]).toBe("#3599b2");
  });

  it("exposes the cool-gray scale", () => {
    expect(tokens.color.gray[900]).toBe("#0a0c12");
    expect(tokens.color.gray[50]).toBe("#e8e8e9");
  });

  it("exposes font families", () => {
    expect(tokens.font.mono).toContain("Martian Mono");
    expect(tokens.font.sans).toContain("Public Sans");
  });
});
