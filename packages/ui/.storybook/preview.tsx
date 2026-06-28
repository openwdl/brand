import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { DocsContainer } from "@storybook/blocks";
import { themes } from "@storybook/theming";
import { addons } from "@storybook/preview-api";
import { useEffect, useState, type ComponentProps } from "react";
import "../src/theme/theme.css";
import "../src/theme/base.css";
import "../src/theme/fonts.css";

/**
 * Autodocs container that follows the toolbar theme toggle: dark by default,
 * light when the user selects the light theme. Storybook's `docs.theme` is
 * static, so we read the `theme` global from the channel and pass the matching
 * Storybook theme to the underlying DocsContainer.
 */
function ThemedDocsContainer(props: ComponentProps<typeof DocsContainer>) {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const channel = addons.getChannel();
    const sync = (event: { globals?: { theme?: string } }) => {
      const theme = event?.globals?.theme;
      if (theme) setIsDark(theme !== "light");
    };
    channel.on("globalsUpdated", sync);
    channel.on("setGlobals", sync);
    return () => {
      channel.off("globalsUpdated", sync);
      channel.off("setGlobals", sync);
    };
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
