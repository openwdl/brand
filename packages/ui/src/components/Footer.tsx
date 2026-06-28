import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Footer.module.css";

/** Props for {@link Footer}: native footer attributes plus configuration. */
export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Copyright line (shown first). */
  copyright?: ReactNode;
  /** License line (shown below the copyright). */
  license?: ReactNode;
}

/**
 * A configurable site footer: a copyright and license notice on the left, with
 * any children (e.g. a repository link) on the right. Stacks on narrow
 * viewports. Colors come from theme variables.
 */
export function Footer({ copyright, license, className, children, ...props }: FooterProps) {
  return (
    <footer className={[styles.footer, className].filter(Boolean).join(" ")} {...props}>
      <div className={styles.info}>
        {copyright && <p>{copyright}</p>}
        {license && <p>{license}</p>}
      </div>
      {children && <div className={styles.links}>{children}</div>}
    </footer>
  );
}
