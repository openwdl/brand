import { render, screen } from "@testing-library/react";
import { Callout } from "./Callout";

describe("Callout", () => {
  it("renders its body content", () => {
    render(<Callout>Be careful here.</Callout>);
    expect(screen.getByText("Be careful here.")).toBeInTheDocument();
  });

  it("uses the default per-variant title", () => {
    render(<Callout variant="warning">text</Callout>);
    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("uses a custom title when provided", () => {
    render(<Callout variant="note" title="Heads up">text</Callout>);
    expect(screen.getByText("Heads up")).toBeInTheDocument();
  });
});
