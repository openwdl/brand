import { gridScales, type GridScale } from "../data/brand";
import styles from "./Grid.module.css";

// Dots along each line in a preview (same for all scales, so the three can be
// compared by density rather than count). Box size = gap * DOT_COUNT.
const DOT_COUNT = 18;
// Dots between grid lines. Odd, so dots align exactly at the intersections.
const CELL_DOTS = 9;
// Documentation previews use a brighter dot than the hero so the pattern reads
// clearly on the card surface (the hero itself stays subtle via --dot-color).
const PREVIEW_DOT = "var(--gray-300)";

/**
 * Renders one styled card for a single dot-grid scale: a live preview of the
 * dotted-line grid (the same style used behind the hero, sized to show the same
 * dot count at every scale), the numeric spec, and guidance on when to use it.
 *
 * @param scale - The grid scale (name, abbreviation, radius, gap, usage).
 */
function GridCard({ scale }: { scale: GridScale }) {
  // Box = gap * DOT_COUNT keeps the dot count constant; the line spacing
  // (gap * CELL_DOTS) gives the same airy dotted-line grid as the hero.
  const size = `${scale.gap * DOT_COUNT}px`;
  const cell = `${scale.gap * CELL_DOTS}px`;
  const dot = `radial-gradient(circle, ${PREVIEW_DOT} ${scale.radius}px, transparent ${scale.radius}px)`;
  return (
    <div className={styles.card}>
      <div
        className={styles.preview}
        style={{
          width: size,
          height: size,
          // Two layers: horizontal dotted lines, then vertical dotted lines.
          backgroundImage: `${dot}, ${dot}`,
          backgroundSize: `${scale.gap}px ${cell}, ${cell} ${scale.gap}px`,
        }}
      />
      <div className={styles.meta}>
        <h4>
          {scale.name} <span className={styles.abbr}>{scale.abbr}</span>
        </h4>
        <p className={styles.spec}>
          {scale.radius}px radius, {scale.gap}px gap
        </p>
        <p className={styles.usage}>{scale.usage}</p>
      </div>
    </div>
  );
}

/**
 * The Grid section of the brand-guidelines site. Documents the three dot-grid
 * pattern densities (large, medium, small) as side-by-side cards, each
 * previewing the pattern and explaining when to use it.
 *
 * @returns A JSX `<section>` element with id `"grid"`.
 */
export function Grid(): JSX.Element {
  return (
    <section id="grid" className={styles.section}>
      <h2>Grid</h2>
      <p className={styles.lead}>
        The dot grid is a core brand texture. It comes in three densities. Each
        preview below shows the same number of dots, so the scales can be
        compared directly. Use the size that suits the surface.
      </p>
      <div className={styles.cards}>
        {gridScales.map((scale) => (
          <GridCard key={scale.abbr} scale={scale} />
        ))}
      </div>
    </section>
  );
}
