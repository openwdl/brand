import { type HTMLAttributes } from "react";
import styles from "./Divider.module.css";

/** Props for {@link Divider}: native hr attributes plus an orientation. */
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Orientation (default `"horizontal"`). */
  orientation?: "horizontal" | "vertical";
}

/** A thin rule using the theme `--border` color, horizontal or vertical. */
export function Divider({ orientation = "horizontal", className, ...props }: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      className={[styles.divider, styles[orientation], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
