import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";
import styles from "./Nav.module.css";

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

  it("contains its content in a max-width inner wrapper", () => {
    render(<Nav logo={<span>OpenWDL</span>} links={[]} />);
    expect(screen.getByRole("banner").firstElementChild).toHaveClass(styles.inner);
  });
});
