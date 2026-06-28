import { render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("uses the label as its accessible name", () => {
    render(<IconButton label="Close"><svg /></IconButton>);
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("defaults to type=button", () => {
    render(<IconButton label="Menu"><svg /></IconButton>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("calls onClick", () => {
    const onClick = vi.fn();
    render(<IconButton label="Go" onClick={onClick}><svg /></IconButton>);
    screen.getByRole("button").click();
    expect(onClick).toHaveBeenCalledOnce();
  });
});
