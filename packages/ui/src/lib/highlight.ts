/**
 * Highlights `code` to HTML using shiki, lazily importing the engine so it is
 * never part of the initial bundle. Uses dual light/dark themes emitted as CSS
 * variables (`--shiki-light` / `--shiki-dark`) so the active theme decides the
 * colors. Returns `null` on failure (e.g. an unsupported language) so callers
 * can fall back to plain text.
 *
 * @param code - Source text to highlight.
 * @param lang - Language id (e.g. `"json"`, `"bash"`). Unknown ids fall back.
 */
export async function highlightToHtml(code: string, lang: string): Promise<string | null> {
  try {
    const { codeToHtml } = await import("shiki");
    return await codeToHtml(code, {
      lang,
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    });
  } catch {
    return null;
  }
}
