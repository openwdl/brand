import { type ReactNode } from "react";
import { copyText } from "../lib/clipboard";
import { useToast } from "./Toast";
import styles from "./CopyButton.module.css";

/** Props for {@link CopyButton}. */
export interface CopyButtonProps {
  /** The string written to the clipboard on click. */
  value: string;
  /** Human-readable label used in the `aria-label` and toast message. */
  label: string;
  /** Optional custom button content (defaults to the text `"Copy"`). */
  children?: ReactNode;
}

/**
 * A button that copies `value` to the clipboard and shows a toast. Must be
 * rendered inside a {@link ToastProvider}. Surfaces clipboard failures as a
 * toast rather than an unhandled rejection.
 */
export function CopyButton({ value, label, children }: CopyButtonProps) {
  const toast = useToast();
  return (
    <button
      type="button"
      className={styles.button}
      aria-label={`Copy ${label}`}
      onClick={async () => {
        try {
          await copyText(value);
          toast(`Copied ${label}`);
        } catch {
          toast("Copy failed, check clipboard permissions");
        }
      }}
    >
      {children ?? "Copy"}
    </button>
  );
}
