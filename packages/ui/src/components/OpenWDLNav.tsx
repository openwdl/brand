import { SiGithub } from "react-icons/si";
import { Nav, type NavProps } from "./Nav";
import styles from "./OpenWDLNav.module.css";

/** Canonical global destinations that can be marked as the current page. */
export type OpenWDLNavActive = "about" | "docs" | "specification" | "blog";

/** Props for the canonical OpenWDL-wide navbar. */
export interface OpenWDLNavProps
  extends Omit<NavProps, "logoHref" | "logoLabel" | "links" | "utilities" | "action" | "children"> {
  /** OpenWDL brand mark supplied by the consuming site. */
  logo: NavProps["logo"];
  /** Current canonical destination. */
  active?: OpenWDLNavActive;
}

const DESTINATIONS = [
  { key: "about", label: "About", href: "https://openwdl.org/about" },
  { key: "docs", label: "Docs", href: "https://docs.openwdl.org" },
  { key: "specification", label: "Specification", href: "https://openwdl.org/spec" },
  { key: "blog", label: "Blog", href: "https://openwdl.org/blog/" },
] as const;

/** Canonical global navbar shared by OpenWDL sites. */
export function OpenWDLNav({ logo, active, ...props }: OpenWDLNavProps) {
  return (
    <Nav
      {...props}
      logo={logo}
      logoHref="https://openwdl.org"
      logoLabel="OpenWDL home"
      links={DESTINATIONS.map((destination) => ({
        ...destination,
        current: destination.key === active,
      }))}
      utilities={(
        <a href="https://github.com/openwdl">
          <SiGithub aria-hidden="true" />
          <span className={styles.githubLabel}>OpenWDL on GitHub</span>
        </a>
      )}
      action={{
        label: "Get started",
        href: "https://docs.openwdl.org/getting-started/quickstart.html",
      }}
    />
  );
}
