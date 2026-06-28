/**
 * Writes the given text to the system clipboard using the async Clipboard API.
 * Rejects if the browser denies clipboard access or the API is unavailable.
 *
 * @param text - The plain-text string to place on the clipboard.
 */
export async function copyText(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}
