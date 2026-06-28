import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Nav.module.css";

/** A single navigation link. */
export interface NavLink {
  /** Anchor target. */
  href: string;
  /** Visible label. */
  label: string;
}

/** Props for {@link Nav}: native header attributes plus configuration. */
export interface NavProps extends HTMLAttributes<HTMLElement> {
  /** Brand mark shown on the left (image, wordmark, or any node). */
  logo?: ReactNode;
  /** Where the brand mark links (default `"#"`). */
  logoHref?: string;
  /** Navigation links shown on the right. */
  links?: NavLink[];
  /** Stick to the top with a frosted backdrop (default `true`). */
  sticky?: boolean;
}

/**
 * A configurable site header: a brand mark on the left and links (plus any
 * extra children, e.g. a theme toggle) on the right. Links collapse on narrow
 * viewports. Colors and the frosted backdrop come from theme variables.
 */
export function Nav({ logo, logoHref = "#", links = [], sticky = true, className, children, ...props }: NavProps) {
  return (
    <header
      className={[styles.nav, sticky ? styles.sticky : "", className].filter(Boolean).join(" ")}
      {...props}
    >
      {logo && (
        <a href={logoHref} className={styles.brand}>
          {logo}
        </a>
      )}
      <nav className={styles.links}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
        {children}
      </nav>
    </header>
  );
}
