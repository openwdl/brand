import type { Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

/**
 * Lazily creates (once) a shiki highlighter loaded with the WDL TextMate
 * grammar and the github light/dark themes. Both shiki and the grammar are
 * dynamically imported so they never land in the initial bundle.
 */
async function getHighlighter(): Promise<Highlighter> {
  highlighterPromise ??= (async () => {
    const { createHighlighter } = await import("shiki");
    const wdlGrammar = (await import("./wdl.tmGrammar.json")).default;
    return createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [wdlGrammar as never],
    });
  })();
  return highlighterPromise;
}

/**
 * Highlights `code` to HTML using shiki with dual light/dark themes emitted as
 * CSS variables (`--shiki-light` / `--shiki-dark`). WDL is supported via a
 * bundled grammar; other languages are loaded from shiki's bundle on demand.
 * Returns `null` on failure (e.g. an unsupported language) so callers can fall
 * back to plain text.
 *
 * @param code - Source text to highlight.
 * @param lang - Language id (e.g. `"wdl"`, `"json"`, `"bash"`).
 */
export async function highlightToHtml(code: string, lang: string): Promise<string | null> {
  try {
    const highlighter = await getHighlighter();
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      await highlighter.loadLanguage(lang as never);
    }
    return highlighter.codeToHtml(code, {
      lang,
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    });
  } catch {
    return null;
  }
}
