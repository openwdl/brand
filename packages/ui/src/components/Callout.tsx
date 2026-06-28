import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Callout.module.css";

/** Kind of {@link Callout}, which sets its color, icon, and default title. */
export type CalloutVariant = "note" | "tip" | "warning" | "danger";

/** Props for {@link Callout}: native div attributes plus variant and title. */
export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  /** Kind of callout (default `"note"`). */
  variant?: CalloutVariant;
  /** Heading text; defaults to a per-variant label. */
  title?: string;
  /** Body content. */
  children?: ReactNode;
}

const META: Record<CalloutVariant, { icon: string; title: string }> = {
  note: { icon: "ℹ️", title: "Note" },
  tip: { icon: "💡", title: "Tip" },
  warning: { icon: "⚠️", title: "Warning" },
  danger: { icon: "⛔", title: "Danger" },
};

/**
 * A highlighted admonition box (note / tip / warning / danger) for docs and
 * long-form content. Tinted with the matching semantic status color.
 */
export function Callout({ variant = "note", title, className, children, ...props }: CalloutProps) {
  const meta = META[variant];
  return (
    <div className={[styles.callout, styles[variant], className].filter(Boolean).join(" ")} {...props}>
      <div className={styles.icon} aria-hidden>{meta.icon}</div>
      <div>
        <div className={styles.title}>{title ?? meta.title}</div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
