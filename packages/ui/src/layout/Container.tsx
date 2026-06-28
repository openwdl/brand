import { type HTMLAttributes } from "react";
import styles from "./Container.module.css";

/** Props for {@link Container}: native div attributes. */
export type ContainerProps = HTMLAttributes<HTMLDivElement>;

/** Centers content and caps its width at the layout `--maxw`, with side padding. */
export function Container({ className, ...props }: ContainerProps) {
  return <div className={[styles.container, className].filter(Boolean).join(" ")} {...props} />;
}
