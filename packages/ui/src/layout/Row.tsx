import { type CSSProperties, type HTMLAttributes } from "react";
import styles from "./Row.module.css";

/** Props for {@link Row}: native div attributes plus flex spacing controls. */
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /** CSS gap between children (default `"1rem"`). */
  gap?: string | number;
  /** `align-items` value. */
  align?: CSSProperties["alignItems"];
  /** `justify-content` value. */
  justify?: CSSProperties["justifyContent"];
  /** Whether children wrap onto multiple lines (default `false`). */
  wrap?: boolean;
}

/** Lays out children in a horizontal flex row with a configurable gap. */
export function Row({ gap = "1rem", align = "center", justify, wrap = false, style, className, ...props }: RowProps) {
  return (
    <div
      className={[styles.row, className].filter(Boolean).join(" ")}
      style={{ gap, alignItems: align, justifyContent: justify, flexWrap: wrap ? "wrap" : "nowrap", ...style }}
      {...props}
    />
  );
}
