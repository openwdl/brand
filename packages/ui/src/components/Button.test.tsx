import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("defaults to type=button", () => {
    render(<Button>Go</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    screen.getByRole("button").click();
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("can be disabled", () => {
    render(<Button disabled>Go</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("forwards arbitrary props and a ref", () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Button ref={ref} aria-label="save">Save</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "save");
  });
});
