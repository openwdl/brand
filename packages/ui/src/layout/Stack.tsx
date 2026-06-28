import { type CSSProperties, type HTMLAttributes } from "react";
import styles from "./Stack.module.css";

/** Props for {@link Stack}: native div attributes plus flex spacing controls. */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** CSS gap between children (default `"1rem"`). */
  gap?: string | number;
  /** `align-items` value. */
  align?: CSSProperties["alignItems"];
  /** `justify-content` value. */
  justify?: CSSProperties["justifyContent"];
}

/** Lays out children in a vertical flex column with a configurable gap. */
export function Stack({ gap = "1rem", align, justify, style, className, ...props }: StackProps) {
  return (
    <div
      className={[styles.stack, className].filter(Boolean).join(" ")}
      style={{ gap, alignItems: align, justifyContent: justify, ...style }}
      {...props}
    />
  );
}
