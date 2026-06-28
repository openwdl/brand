import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { DocsContainer } from "@storybook/blocks";
import { themes } from "@storybook/theming";
import { useEffect, useState, type ComponentProps } from "react";
import "../src/theme/theme.css";
import "../src/theme/base.css";
import "../src/theme/fonts.css";

/** Reads the current theme from the `data-theme` attribute addon-themes sets on `<html>`. */
function readIsDark(): boolean {
  return document.documentElement.getAttribute("data-theme") !== "light";
}

/**
 * Autodocs container that follows the toolbar theme toggle: dark by default,
 * light when the user selects the light theme. Storybook's `docs.theme` is
 * static, so we observe the `data-theme` attribute that addon-themes applies to
 * `<html>` and pass the matching Storybook theme to the DocsContainer.
 */
function ThemedDocsContainer(props: ComponentProps<typeof DocsContainer>) {
  const [isDark, setIsDark] = useState(readIsDark);
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setIsDark(readIsDark());
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  return <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />;
}

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    // The Docs page follows the toolbar theme toggle (see ThemedDocsContainer).
    docs: { container: ThemedDocsContainer },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { dark: "dark", light: "light" },
      defaultTheme: "dark",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
