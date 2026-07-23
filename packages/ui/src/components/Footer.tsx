import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Footer.module.css";

/** A single link inside a {@link FooterColumn}. */
export interface FooterLink {
  /** Visible link text. */
  label: string;
  /** Link destination. */
  href: string;
  /** Show an external-destination indicator. */
  external?: boolean;
}

/** A labelled column of links rendered in the footer navigation. */
export interface FooterColumn {
  /** Column heading. */
  heading: string;
  /** Ordered list of links rendered beneath the heading. */
  links: FooterLink[];
}

/** An icon-led action in the footer community banner. */
export interface FooterAction extends FooterLink {
  /** Decorative icon rendered before the label. */
  icon?: ReactNode;
}

/** Content for the footer community banner. */
export interface FooterCTA {
  /** Primary participation message. */
  heading: ReactNode;
  /** Supporting message below the heading. */
  description?: ReactNode;
  /** Community actions rendered beside the message. */
  actions: FooterAction[];
}

/** Props for {@link Footer}. */
export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Optional community banner. */
  cta?: FooterCTA;
  /** Brand mark rendered in the directory body. */
  logo?: ReactNode;
  /** Where the brand mark links (default `"/"`). */
  logoHref?: string;
  /** Short descriptor rendered below the logo. */
  tagline?: ReactNode;
  /** Link columns in the directory body. */
  columns?: FooterColumn[];
  /** Copyright notice rendered in the bottom bar. */
  copyright?: ReactNode;
  /** Optional consumer-specific legal content in the bottom bar. */
  legal?: ReactNode;
}

function ExternalIcon() {
  return (
    <svg
      className={styles.externalIcon}
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
 * A full-width footer with an optional community banner, brand directory, and
 * legal bar. Each zone aligns to the shared maximum content width.
 */
export function Footer({
  cta,
  logo,
  logoHref = "/",
  tagline,
  columns,
  copyright,
  legal,
  className,
  ...props
}: FooterProps) {
  const hasBody = Boolean(logo || tagline || columns?.length);

  return (
    <footer className={[styles.footer, className].filter(Boolean).join(" ")} {...props}>
      {cta && (
        <div className={styles.ctaZone}>
          <div className={[styles.inner, styles.cta].join(" ")}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaHeading}>{cta.heading}</p>
              {cta.description && <p className={styles.ctaDescription}>{cta.description}</p>}
            </div>
            {cta.actions.length > 0 && (
              <div className={styles.ctaActions}>
                {cta.actions.map((action) => (
                  <a key={action.href} href={action.href} className={styles.ctaAction}>
                    {action.icon && <span className={styles.actionIcon}>{action.icon}</span>}
                    <span>{action.label}</span>
                    {action.external && <ExternalIcon />}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {hasBody && (
        <div className={styles.bodyZone}>
          <div className={[styles.inner, styles.body].join(" ")}>
            <div className={styles.brand}>
              {logo && (
                <a href={logoHref} className={styles.logoLink} aria-label="OpenWDL home">
                  {logo}
                </a>
              )}
              {tagline && <p className={styles.tagline}>{tagline}</p>}
            </div>

            {columns?.length ? (
              <nav className={styles.nav} aria-label="Footer navigation">
                {columns.map((column) => (
                  <div key={column.heading} className={styles.column}>
                    <p className={styles.columnHeading}>{column.heading}</p>
                    <ul className={styles.columnList}>
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} className={styles.navLink}>
                            <span>{link.label}</span>
                            {link.external && <ExternalIcon />}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            ) : null}
          </div>
        </div>
      )}

      {(copyright || legal) && (
        <div className={styles.bottomZone}>
          <div className={[styles.inner, styles.bottom].join(" ")}>
            {copyright && <span>{copyright}</span>}
            {legal && <span className={styles.legal}>{legal}</span>}
          </div>
        </div>
      )}
    </footer>
  );
}
