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
        Made available under the BSD 3-Clause License. © 2019 to Present The
        OpenWDL Developers.
      </p>
      <a className={styles.repo} href={repoUrl}>
        <GitHubIcon />
        openwdl/brand
      </a>
    </footer>
  );
}
