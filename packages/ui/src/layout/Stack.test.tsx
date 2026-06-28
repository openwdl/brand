import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders its children", () => {
    render(<Stack><span>a</span><span>b</span></Stack>);
    expect(screen.getByText("a")).toBeInTheDocument();
    expect(screen.getByText("b")).toBeInTheDocument();
  });

  it("applies the gap as an inline style", () => {
    render(<Stack gap="2rem">x</Stack>);
    expect(screen.getByText("x")).toHaveStyle({ gap: "2rem" });
  });
});
