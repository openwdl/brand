import { type CSSProperties, type HTMLAttributes } from "react";
import styles from "./Grid.module.css";

/** Props for {@link Grid}: native div attributes plus grid controls. */
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of equal-width columns (default `2`). */
  columns?: number;
  /** CSS gap between cells (default `"1rem"`). */
  gap?: string | number;
}

/** A simple equal-column CSS grid with a configurable column count and gap. */
export function Grid({ columns = 2, gap = "1rem", style, className, ...props }: GridProps) {
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
    ...style,
  };
  return (
    <div className={[styles.grid, className].filter(Boolean).join(" ")} style={gridStyle} {...props} />
  );
}
