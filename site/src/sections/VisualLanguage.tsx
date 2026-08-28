import { ChapterHeader } from "../components/ChapterHeader";
import { ColorPalette } from "./ColorPalette";
import { Typography } from "./Typography";
import styles from "./VisualLanguage.module.css";

/** Complete color and typography reference presented as one visual-language chapter. */
export function VisualLanguage() {
  return (
    <section id="visual-language" className={styles.section}>
      <ChapterHeader
        number="04"
        label="Color and typography"
        title="Use one palette and two typefaces."
      >
        <p>
          Use Teal to identify OpenWDL and show emphasis. Use Cool Gray for
          backgrounds, borders, neutral text, and interface structure. Use Public
          Sans for headings and prose. Use Martian Mono for code, compact labels,
          captions, and technical accents.
        </p>
      </ChapterHeader>
      <div className={styles.content}>
        <Typography />
        <ColorPalette />
      </div>
    </section>
  );
}
