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

/**
 * A themed anchor. External links (explicit `external` or an `http(s)` href)
 * open in a new tab with `rel="noopener noreferrer"`. Explicit `target`/`rel`
 * props always win.
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
    </a>
  );
});
