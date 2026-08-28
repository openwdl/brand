import { ChapterHeader } from "../components/ChapterHeader";
import styles from "./Foundation.module.css";

const principles = [
  {
    title: "Readable",
    copy: "Use legible type and a clear hierarchy so readers can find their next step.",
  },
  {
    title: "Structured",
    copy: "Build pages and interfaces from shared rules, not one-off treatments.",
  },
  {
    title: "Portable",
    copy: "Keep OpenWDL recognizable across websites, documents, presentations, and software.",
  },
];

/** Foundation chapter connecting the visual system to properties of WDL. */
export function Foundation() {
  return (
    <section id="foundation" className={styles.section}>
      <ChapterHeader
        number="01"
        label="Foundation"
        title="The brand reflects the clarity of the language."
      >
        <p>
          People read and write OpenWDL workflows. The brand system supports
          those same tasks with clear hierarchy, repeatable structure, and
          consistent behavior across media.
        </p>
      </ChapterHeader>
      <div className={styles.principles}>
        {principles.map(({ title, copy }) => (
          <article key={title} className={styles.card}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className={styles.voice}>
        <h3>Brand voice</h3>
        <p className={styles.voiceIntro}>
          Use clear, plain language because WDL makes workflows clear to the
          people who read and write them. Lead with the point, choose familiar
          words, use active verbs, and state conditions where they apply.
        </p>
        <div className={styles.examples}>
          <figure className={styles.example}>
            <figcaption>Good</figcaption>
            <blockquote>
              Run the workflow again after you update the input file.
            </blockquote>
          </figure>
          <figure className={styles.example}>
            <figcaption>Bad</figcaption>
            <blockquote>
              Workflow execution may be reinitiated subsequent to input file
              modification.
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
