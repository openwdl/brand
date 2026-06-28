import { copyText } from "../lib/clipboard";
import { useToast } from "./ToastProvider";
import styles from "./ColorSwatch.module.css";

/**
 * An interactive swatch card that displays a color chip, shade number, and hex value.
 * Clicking the button copies the hex string to the clipboard and fires a brief toast
 * notification so the user has visual confirmation the copy succeeded.
 *
 * @param shade - The numeric shade weight (e.g. 900, 500, 50) labelling this stop on the scale.
 * @param hex   - The hex color string (e.g. "#4BD8FA") to display and copy on click.
 */
export function ColorSwatch({ shade, hex }: { shade: number; hex: string }) {
  const toast = useToast();
  return (
    <button
      type="button"
      className={styles.swatch}
      // aria-label drives both accessibility and the test query `{ name: "Copy #…" }`.
      aria-label={`Copy ${hex}`}
      onClick={async () => {
        // Write to clipboard first; only confirm when the write resolves. If the
        // Clipboard API is unavailable or denied, tell the user instead of failing
        // silently with an unhandled rejection.
        try {
          await copyText(hex);
          toast(`Copied ${hex}`);
        } catch {
          toast("Copy failed, check clipboard permissions");
        }
      }}
    >
      {/* Chip is a purely visual block; its color is set inline from the data. */}
      <span className={styles.chip} style={{ background: hex }} />
      <span className={styles.shade}>{shade}</span>
      <span className={styles.hex}>{hex}</span>
    </button>
  );
}
