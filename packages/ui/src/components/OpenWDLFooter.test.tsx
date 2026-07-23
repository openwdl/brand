import { render, screen } from "@testing-library/react";
import { OpenWDLFooter } from "./OpenWDLFooter";

describe("OpenWDLFooter", () => {
  it("renders the canonical OpenWDL community footer", () => {
    render(<OpenWDLFooter logo={<span>OpenWDL</span>} />);

    expect(screen.getByText("Build workflows in the open.")).toBeInTheDocument();
    expect(screen.getByText(
      "An open standard for human-readable and writable workflow descriptions.",
    )).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /join slack/i }))
      .toHaveAttribute("href", expect.stringContaining("join.slack.com"));
    expect(screen.getByRole("link", { name: /follow on github/i }))
      .toHaveAttribute("href", "https://github.com/openwdl");
    expect(screen.getByRole("link", { name: /specification/i }))
      .toHaveAttribute("href", "https://github.com/openwdl/wdl");
    expect(screen.getByRole("link", { name: "hello@openwdl.org" }))
      .toHaveAttribute("href", "mailto:hello@openwdl.org");
    expect(screen.getByText(`© ${new Date().getFullYear()} The OpenWDL Developers.`))
      .toBeInTheDocument();
  });

  it("renders consumer-specific legal content", () => {
    render(<OpenWDLFooter logo={<span>OpenWDL</span>} legal="Site-specific license" />);
    expect(screen.getByText("Site-specific license")).toBeInTheDocument();
  });
});
