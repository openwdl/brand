import { FaSlack } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { Footer, type FooterProps } from "./Footer";

const SLACK_INVITE =
  "https://join.slack.com/t/openwdl/shared_invite/zt-ctmj4mhf-cFBNgziCW88SvbhlHysZHA";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "https://openwdl.org", external: true },
      { label: "Blog", href: "https://openwdl.org/blog/", external: true },
      { label: "Docs", href: "https://docs.openwdl.org", external: true },
      { label: "Brand assets", href: "https://openwdl.org/brand", external: true },
    ],
  },
  {
    heading: "Projects",
    links: [
      { label: "Specification", href: "https://github.com/openwdl/wdl", external: true },
      { label: "Governance", href: "https://github.com/openwdl/governance", external: true },
      { label: "Brand repository", href: "https://github.com/openwdl/brand", external: true },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@openwdl.org", href: "mailto:hello@openwdl.org" },
    ],
  },
] satisfies FooterProps["columns"];

/** Props for the canonical OpenWDL-wide footer. */
export interface OpenWDLFooterProps
  extends Omit<FooterProps, "cta" | "tagline" | "columns" | "copyright"> {
  /** OpenWDL brand mark supplied by the consuming site. */
  logo: FooterProps["logo"];
}

/** Canonical footer shared by OpenWDL sites. */
export function OpenWDLFooter({ logo, logoHref = "https://openwdl.org", ...props }: OpenWDLFooterProps) {
  return (
    <Footer
      {...props}
      logo={logo}
      logoHref={logoHref}
      tagline="An open standard for human-readable and writable workflow descriptions."
      cta={{
        heading: "Build workflows in the open.",
        description: "Join the OpenWDL community and help evolve the standard.",
        actions: [
          {
            label: "Join Slack",
            href: SLACK_INVITE,
            icon: <FaSlack aria-hidden="true" />,
            external: true,
          },
          {
            label: "Follow on GitHub",
            href: "https://github.com/openwdl",
            icon: <SiGithub aria-hidden="true" />,
            external: true,
          },
        ],
      }}
      columns={COLUMNS}
      copyright={`© ${new Date().getFullYear()} The OpenWDL Developers.`}
    />
  );
}
