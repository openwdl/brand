import { type AnchorHTMLAttributes, forwardRef } from "react";
import styles from "./Link.module.css";

/** Props for {@link Link}: native anchor attributes plus an `external` hint. */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Treat the link as external: open in a new tab with a safe `rel`. When
   * omitted, links with an `http(s)://` href are auto-detected as external.
   */
  external?: boolean;
}

/** Small up-right arrow shown after external links. Decorative (`aria-hidden`). */
function ExternalIcon() {
  return (
    <svg
      className={styles.icon}
      width="0.85em"
      height="0.85em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

/**
 * A themed anchor. External links (explicit `external` or an `http(s)` href)
 * open in a new tab with `rel="noopener noreferrer"` and show a small up-right
 * arrow. Explicit `target`/`rel` props always win.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { external, href, className, children, target, rel, ...rest },
  ref,
) {
  const isExternal = external ?? (typeof href === "string" && /^https?:\/\//.test(href));
  return (
    <a
      ref={ref}
      href={href}
      className={[styles.link, className].filter(Boolean).join(" ")}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      {...rest}
    >
      {children}
      {isExternal && <ExternalIcon />}
    </a>
  );
});
