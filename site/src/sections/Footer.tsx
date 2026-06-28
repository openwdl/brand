import { SiGithub } from "react-icons/si";
import { repoUrl } from "../data/brand";
import styles from "./Footer.module.css";

/**
 * Site-wide footer displayed below all content sections.
 *
 * Contains a brief copyright / license notice and a link back to the
 * canonical brand repository on GitHub. Laid out as a flex row on wider
 * viewports and stacked on mobile. The copyright line sits above the
 * license notice.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2019 to Present The OpenWDL Developers.
        <br />
        Made available under the{" "}
        <a
          className={styles.license}
          href="https://creativecommons.org/licenses/by/4.0/"
        >
          Creative Commons Attribution 4.0 International License
        </a>
        .
      </p>
      <a className={styles.repo} href={repoUrl}>
        <SiGithub size={16} aria-hidden />
        openwdl/brand
      </a>
    </footer>
  );
}
