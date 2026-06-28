import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders the provided links with their hrefs", () => {
    render(<Nav links={[{ href: "#a", label: "Alpha" }, { href: "#b", label: "Beta" }]} />);
    expect(screen.getByRole("link", { name: "Alpha" })).toHaveAttribute("href", "#a");
    expect(screen.getByRole("link", { name: "Beta" })).toBeInTheDocument();
  });

  it("renders a brand mark linking to logoHref", () => {
    render(<Nav logo={<span>OpenWDL</span>} logoHref="/" />);
    const brand = screen.getByText("OpenWDL").closest("a");
    expect(brand).toHaveAttribute("href", "/");
  });

  it("renders extra children alongside the links", () => {
    render(<Nav links={[]}><button>Toggle</button></Nav>);
    expect(screen.getByRole("button", { name: "Toggle" })).toBeInTheDocument();
  });
});
