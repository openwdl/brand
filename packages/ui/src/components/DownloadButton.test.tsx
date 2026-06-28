import { render, screen } from "@testing-library/react";
import { DownloadButton } from "./DownloadButton";

describe("DownloadButton", () => {
  it("renders a download anchor with href and filename", () => {
    render(<DownloadButton href="/logo.svg" filename="logo.svg">SVG</DownloadButton>);
    const link = screen.getByRole("link", { name: "SVG" });
    expect(link).toHaveAttribute("href", "/logo.svg");
    expect(link).toHaveAttribute("download", "logo.svg");
  });
});
