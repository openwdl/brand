import { render, screen } from "@testing-library/react";
import { Downloads } from "./Downloads";

describe("Downloads", () => {
  it("renders every asset in both formats with package and PDF downloads", () => {
    render(<Downloads />);

    expect(screen.getAllByRole("link", { name: "SVG" })).toHaveLength(8);
    expect(screen.getAllByRole("link", { name: "PNG" })).toHaveLength(8);
    expect(screen.getByRole("button", { name: "Download all assets (.zip)" }))
      .toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download archived PDF" }))
      .toHaveAttribute("href", "/brand/brand-guidelines.pdf");
  });
});
