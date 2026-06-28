import { render, screen } from "@testing-library/react";
import { Row } from "./Row";

describe("Row", () => {
  it("renders its children", () => {
    render(<Row><span>a</span><span>b</span></Row>);
    expect(screen.getByText("a")).toBeInTheDocument();
    expect(screen.getByText("b")).toBeInTheDocument();
  });

  it("wraps when wrap is set", () => {
    render(<Row wrap>x</Row>);
    expect(screen.getByText("x")).toHaveStyle({ flexWrap: "wrap" });
  });
});
