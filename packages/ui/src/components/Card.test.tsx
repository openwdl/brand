import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders its children", () => {
    render(<Card>panel</Card>);
    expect(screen.getByText("panel")).toBeInTheDocument();
  });
});
