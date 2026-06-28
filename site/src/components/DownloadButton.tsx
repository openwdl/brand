import type { ReactNode } from "react";
import styles from "./DownloadButton.module.css";

/**
 * A styled anchor element that triggers a file download when clicked.
 *
 * Renders as an inline pill-shaped link that inherits brand CSS variables for
 * colour and typography. The `download` attribute causes the browser to save
 * the linked resource under `filename` rather than navigating to it.
 *
 * @param href      The URL of the asset to download.
 * @param filename  The suggested filename shown in the browser's save dialog.
 * @param children  Button label content (e.g. the string `"SVG"` or `"PNG"`).
 * @returns A JSX anchor element styled as a download button.
 */
export function DownloadButton({
  href,
  filename,
  children,
}: {
  href: string;
  filename: string;
  children: ReactNode;
}): JSX.Element {
  return (
    // The `download` attribute tells the browser to download rather than navigate.
    <a className={styles.button} href={href} download={filename}>
      {children}
    </a>
  );
}
