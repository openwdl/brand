import { tealScale, coolGrayScale } from "../data/brand";
import { ColorSwatch } from "../components/ColorSwatch";
import styles from "./ColorPalette.module.css";

/**
 * The Color Palette section of the brand guidelines page.
 * Renders two labeled grids, Teal (primary brand) and Cool Gray (neutral support), 
 * each containing ten {@link ColorSwatch} buttons sourced from the brand data module.
 * Clicking any swatch copies its hex value to the clipboard and shows a toast.
 */
export function ColorPalette() {
  return (
    <section id="colors" className={styles.section}>
      <h2>Color Palette</h2>
      <p className={styles.lead}>
        Two primary color families: Teal and Cool Gray, each offering a range of
        shades for different applications. Click any swatch to copy its hex.
      </p>

      {/* Primary brand color, 10 stops from 900 (dark) to 50 (near-white). */}
      <h3>Teal <span className={styles.tag}>Primary Brand Color</span></h3>
      <div className={styles.grid}>
        {tealScale.map((c) => (
          <ColorSwatch key={`teal-${c.shade}`} shade={c.shade} hex={c.hex} />
        ))}
      </div>

      {/* Neutral palette, 10 stops used for backgrounds, borders, and UI chrome. */}
      <h3>Cool Gray <span className={styles.tag}>Supporting Neutral Palette</span></h3>
      <div className={styles.grid}>
        {coolGrayScale.map((c) => (
          <ColorSwatch key={`gray-${c.shade}`} shade={c.shade} hex={c.hex} />
        ))}
      </div>
    </section>
  );
}
