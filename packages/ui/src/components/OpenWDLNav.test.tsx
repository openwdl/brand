import { render, screen, within } from "@testing-library/react";
import { OpenWDLNav } from "./OpenWDLNav";

describe("OpenWDLNav", () => {
  it("renders every canonical OpenWDL destination", () => {
    render(<OpenWDLNav logo={<span>OpenWDL</span>} />);
    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });

    expect(within(navigation).getByRole("link", { name: "About" }))
      .toHaveAttribute("href", "https://openwdl.org/about");
    expect(within(navigation).getByRole("link", { name: "Docs" }))
      .toHaveAttribute("href", "https://docs.openwdl.org");
    expect(within(navigation).getByRole("link", { name: "Specification" }))
      .toHaveAttribute("href", "https://openwdl.org/spec");
    expect(within(navigation).getByRole("link", { name: "Blog" }))
      .toHaveAttribute("href", "https://openwdl.org/blog/");
    expect(within(navigation).getByRole("link", { name: "OpenWDL on GitHub" }))
      .toHaveAttribute("href", "https://github.com/openwdl");
    expect(within(navigation).getByText("OpenWDL on GitHub")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get started" }))
      .toHaveAttribute("href", "https://docs.openwdl.org/getting-started/quickstart.html");
  });

  it("marks the active canonical destination", () => {
    render(<OpenWDLNav logo={<span>OpenWDL</span>} active="docs" />);
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
  });

  it("labels the logo link as the OpenWDL home, not a generic brand", () => {
    render(<OpenWDLNav logo={<span>OpenWDL</span>} />);
    expect(screen.getByRole("link", { name: "OpenWDL home" }))
      .toHaveAttribute("href", "https://openwdl.org");
  });
});
