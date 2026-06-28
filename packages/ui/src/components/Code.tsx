import { type HTMLAttributes } from "react";
import styles from "./Code.module.css";

/** Props for {@link Code}: native element attributes. */
export type CodeProps = HTMLAttributes<HTMLElement>;

/** Inline `<code>` styled with the monospace font and a subtle surface chip. */
export function Code({ className, ...props }: CodeProps) {
  return <code className={[styles.code, className].filter(Boolean).join(" ")} {...props} />;
}
