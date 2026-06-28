import { type HTMLAttributes } from "react";
import styles from "./Section.module.css";

/** Props for {@link Section}: native section attributes. */
export type SectionProps = HTMLAttributes<HTMLElement>;

/** A semantic `<section>` with consistent vertical rhythm between page sections. */
export function Section({ className, ...props }: SectionProps) {
  return <section className={[styles.section, className].filter(Boolean).join(" ")} {...props} />;
}
