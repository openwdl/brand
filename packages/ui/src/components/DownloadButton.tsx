import { type ReactNode } from "react";
import styles from "./DownloadButton.module.css";

/** Props for {@link DownloadButton}. */
export interface DownloadButtonProps {
  /** URL of the asset to download. */
  href: string;
  /** Suggested filename shown in the browser's save dialog. */
  filename: string;
  /** Button label content. */
  children: ReactNode;
}

/**
 * A pill-shaped anchor that downloads `href` (saved as `filename`) rather than
 * navigating to it. Colors come from theme variables.
 */
export function DownloadButton({ href, filename, children }: DownloadButtonProps) {
  return (
    <a className={styles.button} href={href} download={filename}>
      {children}
    </a>
  );
}
