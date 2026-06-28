import { type HTMLAttributes } from "react";
import styles from "./Badge.module.css";

/** Visual style of a {@link Badge}. */
export type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";

/** Props for {@link Badge}: native span attributes plus a variant. */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style (default `"neutral"`). */
  variant?: BadgeVariant;
}

/** A small pill label. Colors come from semantic status tokens. */
export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span className={[styles.badge, styles[variant], className].filter(Boolean).join(" ")} {...props} />
  );
}
