import { type ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./IconButton.module.css";

/** Props for {@link IconButton}: native button attributes plus a required label. */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name, required since the button shows only an icon. */
  label: string;
  /** Size (default `"md"`). */
  size?: "sm" | "md" | "lg";
}

/**
 * A square, icon-only button. The required `label` becomes the accessible name
 * via `aria-label`. Colors come from theme variables. Forwards its ref.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, size = "md", type = "button", className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      className={[styles.iconButton, styles[size], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
});
