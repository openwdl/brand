import { render, screen } from "@testing-library/react";
import { Downloads } from "./Downloads";

describe("Downloads", () => {
  it("renders every asset in both formats with icon-led package and PDF downloads", () => {
    const { container } = render(<Downloads />);

    expect(screen.getAllByRole("link", { name: "SVG" })).toHaveLength(8);
    expect(screen.getAllByRole("link", { name: "PNG" })).toHaveLength(8);
    expect(screen.getByRole("button", { name: "Download all assets (.zip)" }))
      .toBeInTheDocument();
    // Base-relative: this site deploys under a path prefix, so assert against
    // the configured base rather than a hard-coded root path.
    expect(screen.getByRole("link", { name: "Download archived PDF" }))
      .toHaveAttribute("href", `${import.meta.env.BASE_URL}brand-guidelines.pdf`);
    expect(screen.getByRole("button", { name: "Download all assets (.zip)" }).querySelector("svg"))
      .toHaveAttribute("aria-hidden", "true");
    expect(screen.getByRole("link", { name: "Download archived PDF" }).querySelector("svg"))
      .toHaveAttribute("aria-hidden", "true");
    expect(container.querySelectorAll('a[download] svg[aria-hidden="true"]')).toHaveLength(17);
  });
});
