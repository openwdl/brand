import { repoUrl } from "../data/brand";
import { GitHubIcon } from "../components/GitHubIcon";
import styles from "./Footer.module.css";

/**
 * Site-wide footer displayed below all content sections.
 *
 * Contains a brief copyright / license notice and a link back to the
 * canonical brand repository on GitHub. Laid out as a flex row on wider
 * viewports and stacked on mobile.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made available under the{" "}
        <a
          className={styles.license}
          href="https://creativecommons.org/licenses/by/4.0/"
        >
          Creative Commons Attribution 4.0 International License
        </a>
        . © 2019 to Present The OpenWDL Developers.
      </p>
      <a className={styles.repo} href={repoUrl}>
        <GitHubIcon />
        openwdl/brand
      </a>
    </footer>
  );
}
