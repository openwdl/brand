import { type HTMLAttributes } from "react";
import styles from "./ButtonGroup.module.css";

/** Props for {@link ButtonGroup}: native div attributes. */
export type ButtonGroupProps = HTMLAttributes<HTMLDivElement>;

/**
 * Lays out a related set of buttons in a row with consistent spacing, exposed
 * as an accessible `role="group"`.
 */
export function ButtonGroup({ className, ...props }: ButtonGroupProps) {
  return (
    <div
      role="group"
      className={[styles.group, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
