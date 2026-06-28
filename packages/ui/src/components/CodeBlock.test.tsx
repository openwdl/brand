import { render, screen, act, waitFor } from "@testing-library/react";
import { CodeBlock } from "./CodeBlock";

// Keep tests deterministic and fast: don't load the real shiki engine.
vi.mock("../lib/highlight", () => ({
  highlightToHtml: vi.fn().mockResolvedValue(null),
}));

describe("CodeBlock", () => {
  it("renders the code and a filename label", () => {
    render(<CodeBlock code="echo hi" lang="bash" filename="run.sh" />);
    expect(screen.getByText("run.sh")).toBeInTheDocument();
    expect(screen.getByText("echo hi")).toBeInTheDocument();
  });

  it("falls back to the language label when no filename is given", () => {
    render(<CodeBlock code="x" lang="json" />);
    expect(screen.getByText("json")).toBeInTheDocument();
  });

  it("copies the code to the clipboard", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<CodeBlock code="echo hi" lang="bash" />);
    act(() => { screen.getByRole("button", { name: "Copy code" }).click(); });
    await waitFor(() => expect(writeText).toHaveBeenCalledWith("echo hi"));
  });
});
