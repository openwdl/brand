import { type ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./Button.module.css";

/** Visual style of a {@link Button}. */
export type ButtonVariant = "primary" | "secondary" | "ghost";

/** Size of a {@link Button}. */
export type ButtonSize = "sm" | "md" | "lg";

/** Props for {@link Button}: all native button attributes plus variant and size. */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style (default `"primary"`). */
  variant?: ButtonVariant;
  /** Size (default `"md"`). */
  size?: ButtonSize;
}

/**
 * A themed button. Colors come entirely from semantic CSS variables, so it
 * adapts to the active light/dark theme. Defaults `type` to `"button"` to avoid
 * accidental form submission, and forwards its ref to the underlying element.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", type = "button", className, ...props },
  ref,
) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");
  return <button ref={ref} type={type} className={classes} {...props} />;
});
