import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders its children", () => {
    render(<Grid><span>a</span></Grid>);
    expect(screen.getByText("a")).toBeInTheDocument();
  });

  it("sets the requested column count", () => {
    render(<Grid columns={3}>x</Grid>);
    expect(screen.getByText("x")).toHaveStyle({ gridTemplateColumns: "repeat(3, 1fr)" });
  });
});
