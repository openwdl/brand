import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("renders an anchor with its href and text", () => {
    render(<Link href="/docs">Docs</Link>);
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("href", "/docs");
  });

  it("does not open internal links in a new tab", () => {
    render(<Link href="/docs">Docs</Link>);
    expect(screen.getByRole("link")).not.toHaveAttribute("target");
  });

  it("opens http(s) links in a new tab with a safe rel", () => {
    render(<Link href="https://example.com">Ext</Link>);
    const a = screen.getByRole("link");
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("respects an explicit external flag for relative hrefs", () => {
    render(<Link href="/x" external>X</Link>);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("shows an arrow icon for external links but not internal ones", () => {
    const { container, rerender } = render(<Link href="https://example.com">Ext</Link>);
    expect(container.querySelector("svg")).toBeInTheDocument();
    rerender(<Link href="/docs">Docs</Link>);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });
});
