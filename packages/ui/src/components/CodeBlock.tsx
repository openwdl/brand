import { useEffect, useRef, useState } from "react";
import { highlightToHtml } from "../lib/highlight";
import styles from "./CodeBlock.module.css";

/** Props for {@link CodeBlock}. */
export interface CodeBlockProps {
  /** The source code to display. */
  code: string;
  /** Language id for highlighting (default `"text"`). Unknown ids render plain. */
  lang?: string;
  /** Optional label shown in the header (e.g. a filename). */
  filename?: string;
}

/**
 * A fenced code block with a copy button. Renders the raw code immediately,
 * then lazily highlights it with shiki (dual light/dark themes); if highlighting
 * is unavailable for the language it stays as plain monospace text.
 */
export function CodeBlock({ code, lang = "text", filename }: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    highlightToHtml(code, lang).then((result) => {
      if (!cancelled) setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  // Clear the copy-feedback timer if the block unmounts before it fires.
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore clipboard errors */
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.name}>{filename ?? lang}</span>
        <button type="button" className={styles.copy} onClick={onCopy} aria-label="Copy code">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      {html ? (
        <div className={styles.code} dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <pre className={styles.code}>
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
