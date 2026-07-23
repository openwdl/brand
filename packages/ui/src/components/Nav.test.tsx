import { createRef } from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
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

  it("does not apply an accessible label to the logo link when logoLabel is omitted", () => {
    render(<Nav logo={<span>Brand</span>} logoHref="/" />);
    const brand = screen.getByText("Brand").closest("a");
    expect(brand).not.toHaveAttribute("aria-label");
  });

  it("applies the provided logoLabel as the logo link's accessible name", () => {
    render(<Nav logo={<span>Brand</span>} logoHref="/" logoLabel="Acme home" />);
    expect(screen.getByRole("link", { name: "Acme home" })).toHaveAttribute("href", "/");
  });

  it("renders extra children alongside the links", () => {
    render(<Nav links={[]}><button>Toggle</button></Nav>);
    expect(screen.getByRole("button", { name: "Toggle" })).toBeInTheDocument();
  });

  it("contains its content in a max-width inner wrapper", () => {
    render(<Nav logo={<span>OpenWDL</span>} links={[]} />);
    expect(screen.getByRole("banner").firstElementChild).toHaveClass(styles.inner);
  });

  it("forwards its ref and native header attributes", () => {
    const ref = createRef<HTMLElement>();
    render(<Nav ref={ref} aria-label="Site header" data-testid="nav" />);
    expect(ref.current).toBe(screen.getByTestId("nav"));
    expect(ref.current).toHaveAttribute("aria-label", "Site header");
  });

  it("renders a primary action outside the navigation menu", () => {
    render(<Nav action={{ href: "/start", label: "Get started" }} />);
    const action = screen.getByRole("link", { name: "Get started" });
    expect(action).toHaveAttribute("href", "/start");
    expect(action.closest("nav")).toBeNull();
  });

  it("marks the current primary destination", () => {
    render(<Nav links={[{ href: "/docs", label: "Docs", current: true }]} />);
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("aria-current", "page");
  });

  it("opens the mobile menu and closes it after selecting a link", () => {
    render(<Nav links={[{ href: "#docs", label: "Docs" }]} />);

    const button = screen.getByRole("button", { name: "Open navigation" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute(
      "aria-controls",
      screen.getByRole("navigation", { name: "Primary navigation" }).id,
    );
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    fireEvent.click(within(navigation).getByRole("link", { name: "Docs" }));
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu with Escape and restores button focus", () => {
    render(<Nav links={[{ href: "/docs", label: "Docs" }]} />);

    const button = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(button);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
  });

  it("closes the mobile menu when focus leaves the menu region", () => {
    render(
      <Nav
        links={[{ href: "/docs", label: "Docs" }]}
        action={{ href: "/start", label: "Get started" }}
      />,
    );

    const button = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(button);
    fireEvent.blur(screen.getByRole("link", { name: "Docs" }), {
      relatedTarget: screen.getByRole("link", { name: "Get started" }),
    });

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu when a pointerdown lands outside the nav, even on non-focusable content", () => {
    render(<Nav links={[{ href: "/docs", label: "Docs" }]} />);
    const outside = document.createElement("p");
    outside.textContent = "Not focusable page content";
    document.body.appendChild(outside);

    const button = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.pointerDown(outside);
    expect(button).toHaveAttribute("aria-expanded", "false");

    document.body.removeChild(outside);
  });

  it("keeps the mobile menu open for a pointerdown inside the nav or menu button", () => {
    render(<Nav links={[{ href: "/docs", label: "Docs" }]} />);

    const button = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(button);

    fireEvent.pointerDown(screen.getByRole("link", { name: "Docs" }));
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.pointerDown(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
