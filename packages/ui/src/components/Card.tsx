import { type HTMLAttributes } from "react";
import styles from "./Card.module.css";

/** Props for {@link Card}: native div attributes. */
export type CardProps = HTMLAttributes<HTMLDivElement>;

/** A surface container with border, radius, and padding from the theme. */
export function Card({ className, ...props }: CardProps) {
  return <div className={[styles.card, className].filter(Boolean).join(" ")} {...props} />;
}
