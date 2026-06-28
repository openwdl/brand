import { SiGithub } from "react-icons/si";
import { mission, repoUrl, logoAssets } from "../data/brand";
import styles from "./Hero.module.css";

/**
 * Hero section displayed at the very top of the brand-guidelines page.
 *
 * Shows the full OpenWDL logo lockup, the page title, the brand mission
 * statement, and three call-to-action links: download the PDF guidelines,
 * jump to the logo asset downloads, and open the source repository on GitHub.
 */
export function Hero() {
  // Use the teal-on-dark full lockup as the hero image (the most prominent variant).
  const full = logoAssets.find((a) => a.name === "Full Logo (Teal + White)")!;
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.content}>
        <img src={full.svg} alt="OpenWDL" className={styles.logo} />
        <h1>Brand Guidelines</h1>
        <p className={styles.mission}>{mission}</p>
        <div className={styles.actions}>
          {/* The PDF is copied to public/ by copy-assets.mjs at build time;
              the href is built from BASE_URL so it survives a base-path change. */}
          <a
            className={styles.primary}
            href={`${import.meta.env.BASE_URL}brand-guidelines.pdf`}
            download
          >
            Download PDF
          </a>
          {/* Jump to the Downloads section, where every logo asset can be grabbed.
              Hidden on mobile/tablet to keep the hero actions compact. */}
          <a className={`${styles.secondary} ${styles.downloadLogos}`} href="#downloads">
            Download logos
          </a>
          <a className={styles.secondary} href={repoUrl}>
            <SiGithub size={16} aria-hidden />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
