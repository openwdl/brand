import { render, screen, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeProvider";

function Probe() {
  const { theme, setTheme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("ThemeProvider", () => {
  it("defaults to dark when no preference and no stored value", () => {
    render(<ThemeProvider><Probe /></ThemeProvider>);
    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("uses a stored theme over the default", () => {
    localStorage.setItem("openwdl-theme", "light");
    render(<ThemeProvider><Probe /></ThemeProvider>);
    expect(screen.getByTestId("theme")).toHaveTextContent("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("setTheme updates the attribute and persists", () => {
    render(<ThemeProvider><Probe /></ThemeProvider>);
    act(() => { screen.getByText("light").click(); });
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("openwdl-theme")).toBe("light");
  });

  it("toggleTheme flips dark <-> light", () => {
    render(<ThemeProvider><Probe /></ThemeProvider>);
    act(() => { screen.getByText("toggle").click(); });
    expect(screen.getByTestId("theme")).toHaveTextContent("light");
  });

  it("useTheme throws outside a provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(/useTheme must be used within/);
    spy.mockRestore();
  });
});
