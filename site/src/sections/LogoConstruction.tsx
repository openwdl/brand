import { logoAssets } from "../data/brand";
import styles from "./LogoConstruction.module.css";

/**
 * The Logo Construction section of the brand guidelines page.
 * Explains when to use the icon-only mark versus the full horizontal lockup,
 * rendering each variant sourced from the {@link logoAssets} catalogue.
 *
 * Two entries are displayed:
 * - "Icon", the standalone geometric mark for small UI contexts.
 * - "Full Logo (Teal + White)", icon + wordmark for headers and documents.
 */
export function LogoConstruction() {
  // Pull the two relevant assets by name; non-null assertion is safe because
  // both entries are always present in the logoAssets catalogue.
  const icon = logoAssets.find((a) => a.name === "Icon")!;
  const full = logoAssets.find((a) => a.name === "Full Logo (Teal + White)")!;

  return (
    <section id="logo" className={styles.section}>
      <h2>Logo Construction</h2>
      <p className={styles.lead}>
        The logo is a simplified representation of an acyclic computational graph.
        The custom wordmark features sharp, angular letterforms drawing inspiration
        from modern monospace and geometric typefaces.
      </p>

      {/* Two-column grid: icon-only card on the left, full lockup on the right. */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>1. Icon Only</h3>
          {/* Centered preview area with a fixed minimum height for visual balance. */}
          <div className={styles.preview}>
            <img src={icon.svg} alt="OpenWDL icon" height={80} />
          </div>
          <p className={styles.note}>
            Best for favicons and small UI elements, social media profile images,
            watermarks and standalone branding marks.
          </p>
        </div>

        <div className={styles.card}>
          <h3>2. Full Logo</h3>
          {/* Same preview dimensions as the icon card for a consistent row height. */}
          <div className={styles.preview}>
            <img src={full.svg} alt="OpenWDL full logo" height={80} />
          </div>
          <p className={styles.note}>
            Icon + wordmark in horizontal alignment. The preferred version for
            website headers, official documents and presentations, promotional
            materials.
          </p>
        </div>
      </div>
    </section>
  );
}
