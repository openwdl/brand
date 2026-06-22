import { logoAssets } from "../data/brand";
import styles from "./Nav.module.css";

/** Navigation links used in the sticky header, each mapping to a section anchor. */
const links = [
  { href: "#logo", label: "Logo" },
  { href: "#logo-color", label: "Color Use" },
  { href: "#typography", label: "Type" },
  { href: "#colors", label: "Palette" },
  { href: "#grid", label: "Grid" },
  { href: "#downloads", label: "Downloads" },
];

/**
 * Sticky site-wide navigation header.
 *
 * Renders the full OpenWDL logo lockup on the left and anchor links to each
 * main section on the right. Collapses the link list on narrow viewports via
 * CSS media query. Uses a frosted-glass treatment so the content beneath
 * remains readable when the user scrolls.
 */
export function Nav() {
  // Use the full teal-on-dark lockup (icon + wordmark) as the brand mark.
  const full = logoAssets.find((a) => a.name === "Full Logo (Teal + White)")!;
  return (
    <header className={styles.nav}>
      <a href="#top" className={styles.brand}>
        <img src={full.svg} alt="OpenWDL" height={24} />
      </a>
      <nav className={styles.links}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
