import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the copyright and license", () => {
    render(<Footer copyright="© 2025 OpenWDL" license={<span>CC BY 4.0</span>} />);
    expect(screen.getByText("© 2025 OpenWDL")).toBeInTheDocument();
    expect(screen.getByText("CC BY 4.0")).toBeInTheDocument();
  });

  it("renders link children", () => {
    render(<Footer><a href="/repo">repo</a></Footer>);
    expect(screen.getByRole("link", { name: "repo" })).toHaveAttribute("href", "/repo");
  });
});
