import { logoVariants } from "../data/brand";
import { LogoPreview } from "../components/LogoPreview";
import { ChapterHeader } from "../components/ChapterHeader";
import styles from "./LogoColor.module.css";

/**
 * The Logo Color section of the OpenWDL brand guidelines.
 *
 * Renders the four approved WDL logo color variants as labeled swatch cards,
 * followed by an interactive `LogoPreview` that lets users see how the
 * recommendation algorithm responds to any background they choose.
 *
 * Each variant card uses a background that mirrors its intended usage context:
 * "Teal + Black" and "All Black" variants appear on a light swatch so their
 * dark elements are visible; the others appear on a dark swatch.
 *
 * @returns A JSX `<section>` element with id `"logo-color"`.
 */
export function LogoColor(): JSX.Element {
  return (
    <section id="using-the-mark" className={styles.section}>
      <ChapterHeader
        number="03"
        label="Using the mark"
        title="Choose a logo that contrasts with its background."
      >
        <p>
          Use teal and white or teal and black when color is available. Use a
          single-color logo for monochrome production or when teal does not work
          with the surrounding colors. Do not recolor, distort, rearrange, or
          redraw the artwork.
        </p>
      </ChapterHeader>

      <div className={styles.grid}>
        {logoVariants.map((v) => {
          // Light-text variants (Teal + Black, All Black) need a light swatch background
          // so their dark ink is actually visible against the card.
          const light = v.name === "Teal + Black" || v.name === "All Black";
          return (
            <div key={v.name} className={styles.card}>
              <div
                className={styles.swatch}
                // Use the CSS gray tokens so the swatches respect the design system.
                style={{ background: light ? "var(--gray-50)" : "var(--gray-800)" }}
              >
                <img src={v.svg} alt={v.name} height={40} />
              </div>
              <h3>{v.name}</h3>
              <p className={styles.note}>{v.usage}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.tester}>
        <h3>Check the logo on its final background</h3>
        <p>
          Choose a background or start with a common preset. The preview selects
          the approved logo with the clearest wordmark contrast.
        </p>
        <LogoPreview />
      </div>
    </section>
  );
}
