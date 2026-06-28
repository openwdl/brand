import * as api from "./index";

describe("@openwdl/ui public API", () => {
  it("exports the theme provider, hook, and tokens", () => {
    expect(typeof api.ThemeProvider).toBe("function");
    expect(typeof api.useTheme).toBe("function");
    expect(api.tokens.color.teal[500]).toBe("#4bd8fa");
    expect(api.STORAGE_KEY).toBe("openwdl-theme");
  });

  it("no longer exports the Task 1 placeholder", () => {
    expect("packageName" in api).toBe(false);
  });
});
