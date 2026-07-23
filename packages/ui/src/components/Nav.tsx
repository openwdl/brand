import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./Nav.module.css";

/** A single primary navigation link. */
export interface NavLink {
  /** Link destination. */
  href: string;
  /** Visible label. */
  label: string;
  /** Mark this destination as the current page. */
  current?: boolean;
}

/** Props for {@link Nav}. */
export interface NavProps extends HTMLAttributes<HTMLElement> {
  /** Brand mark shown on the left. */
  logo?: ReactNode;
  /** Where the brand mark links (default `"#"`). */
  logoHref?: string;
  /**
   * Accessible name for the logo link, e.g. `"Acme home"`. Generic `Nav` has
   * no notion of a specific brand, so this is left undefined by default and
   * the link falls back to its content for an accessible name; brand-specific
   * wrappers (such as `OpenWDLNav`) should always supply one explicitly.
   */
  logoLabel?: string;
  /** Primary navigation links. */
  links?: NavLink[];
  /** Utility controls shown after the primary links. */
  utilities?: ReactNode;
  /** Primary action kept visible on desktop and mobile. */
  action?: NavLink;
  /** Stick to the top with a frosted backdrop (default `true`). */
  sticky?: boolean;
}

function assignRef<T>(ref: ForwardedRef<T>, value: T | null) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/**
 * A responsive site header with primary links, utilities, and a persistent
 * action. On narrow screens the primary navigation becomes an accessible menu.
 */
export const Nav = forwardRef<HTMLElement, NavProps>(function Nav(
  {
    logo,
    logoHref = "#",
    logoLabel,
    links = [],
    utilities,
    action,
    sticky = true,
    className,
    children,
    onBlur,
    ...props
  },
  forwardedRef,
) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationId = useId();
  const navigationRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const setHeaderRef = useCallback((node: HTMLElement | null) => {
    assignRef(forwardedRef, node);
  }, [forwardedRef]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    const isInsideMenuRegion = (target: EventTarget | null) =>
      target instanceof Node
      && (navigationRef.current?.contains(target) || menuButtonRef.current?.contains(target));

    // Pointer/touch interactions can land on non-focusable content (plain
    // text, images, background elements) that never fires a blur event, so
    // the menu needs its own outside-interaction check independent of focus.
    const handlePointerDown = (event: PointerEvent) => {
      if (isInsideMenuRegion(event.target)) return;
      setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    onBlur?.(event);
    if (!menuOpen) return;

    const next = event.relatedTarget;
    if (
      next instanceof Node
      && (navigationRef.current?.contains(next) || menuButtonRef.current?.contains(next))
    ) {
      return;
    }
    setMenuOpen(false);
  };

  const closeFromLink = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  };

  return (
    <header
      ref={setHeaderRef}
      className={[styles.nav, sticky ? styles.sticky : "", className].filter(Boolean).join(" ")}
      onBlur={handleBlur}
      {...props}
    >
      <div className={styles.inner}>
        {logo && (
          <a href={logoHref} className={styles.brand} aria-label={logoLabel}>
            {logo}
          </a>
        )}

        <nav
          ref={navigationRef}
          id={navigationId}
          className={[styles.navigation, menuOpen ? styles.open : ""].filter(Boolean).join(" ")}
          aria-label="Primary navigation"
          onClick={closeFromLink}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          {(utilities || children) && (
            <>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.utilities}>
                {utilities}
                {children}
              </span>
            </>
          )}
        </nav>

        {action && (
          <a href={action.href} className={styles.action}>
            {action.label}
          </a>
        )}

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls={navigationId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
});
