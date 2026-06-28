import { copyText } from "../lib/clipboard";
import { useToast } from "./ToastProvider";
import styles from "./CopyButton.module.css";
import type { ReactNode } from "react";

/**
 * A button that writes a specified value to the clipboard and briefly shows a
 * toast confirmation. Falls back to the text "Copy" when no children are given.
 *
 * @param value    - The string that will be written to the clipboard on click.
 * @param label    - A human-readable label used in the aria-label and toast message.
 * @param children - Optional custom button content; defaults to the text "Copy".
 */
export function CopyButton({
  value,
  label,
  children,
}: {
  value: string;
  label: string;
  children?: ReactNode;
}) {
  const toast = useToast();
  return (
    <button
      type="button"
      className={styles.button}
      aria-label={`Copy ${label}`}
      onClick={async () => {
        // Surface clipboard failures to the user rather than letting the promise
        // reject unhandled (e.g. when the Clipboard API is denied or unavailable).
        try {
          await copyText(value);
          toast(`Copied ${label}`);
        } catch {
          toast("Copy failed, check clipboard permissions");
        }
      }}
    >
      {/* Render children if provided, otherwise fall back to "Copy" */}
      {children ?? "Copy"}
    </button>
  );
}
