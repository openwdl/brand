import { Button } from "@openwdl/ui";
import { FiBookOpen, FiDownload } from "react-icons/fi";
import { logoAssets } from "../data/brand";
import styles from "./Hero.module.css";

/**
 * Hero section displayed at the very top of the brand-guidelines page.
 *
 * Shows the full OpenWDL logo lockup, the page title, the brand mission
 * statement, and direct paths into the complete brand reference and downloads.
 */
export function Hero() {
  // Use the teal-on-dark full lockup as the hero image (the most prominent variant).
  const full = logoAssets.find((a) => a.name === "Full Logo (Teal + White)")!;
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.content}>
        <img src={full.svg} alt="OpenWDL" className={styles.logo} />
        <span className={styles.eyebrow}>OpenWDL brand system</span>
        <h1>
          <span>Clear. Structured.</span>
          <span>Open by design.</span>
        </h1>
        <p className={styles.mission}>
          OpenWDL uses a consistent brand system across websites, documents,
          presentations, and software. Like the language, the brand is developed
          in the open.
        </p>
        <div className={styles.actions}>
          <Button as="a" href="#downloads" leadingIcon={<FiDownload />}>
            Download brand assets
          </Button>
          <Button
            as="a"
            href="#foundation"
            variant="secondary"
            leadingIcon={<FiBookOpen />}
          >
            Read the guidelines
          </Button>
        </div>
      </div>
    </section>
  );
}
