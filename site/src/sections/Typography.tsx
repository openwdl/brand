import { publicSansScale, martianMonoScale } from "../data/brand";
import { TypeRow } from "../components/TypeRow";
import styles from "./Typography.module.css";

/**
 * The Typography section of the WDL brand-guidelines page.
 *
 * Renders both the Public Sans and Martian Mono type scales as interactive
 * tables. Each row is a `TypeRow` that shows a live sample and lets the user
 * copy the corresponding CSS shorthand to the clipboard.
 */
export function Typography() {
  return (
    <section id="typography" className={styles.section}>
      <h2>Typography</h2>
      <p className={styles.lead}>
        Public Sans is the primary typeface for body text and headings. Martian
        Mono adds a technical, structured aesthetic for code, labels, and accents.
        Click "Copy" on any row to grab its CSS.
      </p>

      <h3>Public Sans</h3>
      {/* Iterate over every token in the Public Sans scale */}
      <div className={styles.table}>
        {publicSansScale.map((t) => (
          <TypeRow key={t.usage} token={t} />
        ))}
      </div>

      <h3>Martian Mono</h3>
      {/* Iterate over every token in the Martian Mono scale */}
      <div className={styles.table}>
        {martianMonoScale.map((t) => (
          <TypeRow key={t.usage} token={t} />
        ))}
      </div>
    </section>
  );
}
