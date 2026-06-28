import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders its label", () => {
    render(<Badge>stable</Badge>);
    expect(screen.getByText("stable")).toBeInTheDocument();
  });

  it("applies a variant class", () => {
    render(<Badge variant="success">ok</Badge>);
    // The success variant adds a class beyond the base badge class.
    expect(screen.getByText("ok").className.split(" ").length).toBeGreaterThan(1);
  });
});
