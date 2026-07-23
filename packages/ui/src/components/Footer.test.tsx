import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import styles from "./Footer.module.css";

describe("Footer", () => {
  it("renders the copyright and generic legal content", () => {
    render(<Footer copyright="© 2026 OpenWDL" legal={<span>CC BY 4.0</span>} />);
    expect(screen.getByText("© 2026 OpenWDL")).toBeInTheDocument();
    expect(screen.getByText("CC BY 4.0")).toBeInTheDocument();
  });

  it("renders a community CTA with icon-led actions", () => {
    render(
      <Footer
        cta={{
          heading: "Build workflows in the open.",
          description: "Join the community.",
          actions: [{
            label: "Follow on GitHub",
            href: "https://github.com/openwdl",
            icon: <svg data-testid="github-icon" aria-hidden="true" />,
            external: true,
          }],
        }}
      />,
    );

    expect(screen.getByText("Build workflows in the open.")).toBeInTheDocument();
    expect(screen.getByText("Join the community.")).toBeInTheDocument();
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /follow on github/i }))
      .toHaveAttribute("href", "https://github.com/openwdl");
    expect(screen.getByTestId("github-icon")).toHaveAttribute("aria-hidden", "true");
  });

  it("omits the body zone when only bottom-bar content is provided", () => {
    render(<Footer copyright="© OpenWDL" legal="CC BY 4.0" />);
    expect(screen.getByRole("contentinfo").children).toHaveLength(1);
  });

  it("marks configured column links as external without forcing a new tab", () => {
    render(
      <Footer
        columns={[{
          heading: "Projects",
          links: [{ label: "Specification", href: "https://github.com/openwdl/wdl", external: true }],
        }]}
      />,
    );

    const link = screen.getByRole("link", { name: /specification/i });
    expect(link).not.toHaveAttribute("target");
    expect(link.querySelector("[aria-hidden=true]")).toBeInTheDocument();
  });

  it("contains every footer zone in a max-width inner wrapper", () => {
    render(
      <Footer
        cta={{ heading: "Join us", actions: [] }}
        logo={<span>OpenWDL</span>}
        copyright="© OpenWDL"
        columns={[{ heading: "Links", links: [{ label: "Docs", href: "/docs" }] }]}
      />,
    );

    const footer = screen.getByRole("contentinfo");
    expect(footer.children).toHaveLength(3);
    expect(footer.children[0].firstElementChild).toHaveClass(styles.inner);
    expect(footer.children[1].firstElementChild).toHaveClass(styles.inner);
    expect(footer.children[2].firstElementChild).toHaveClass(styles.inner);
  });

  it("forwards native footer attributes", () => {
    render(<Footer aria-label="Site footer" data-testid="footer" />);
    expect(screen.getByTestId("footer")).toHaveAttribute("aria-label", "Site footer");
  });
});
