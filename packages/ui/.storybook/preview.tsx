import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";
import "../src/theme/theme.css";
import "../src/theme/base.css";
import "../src/theme/fonts.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    // Render the autodocs "Docs" pages with the dark theme so their chrome and
    // story-preview backgrounds match the dark-default component canvas.
    docs: { theme: themes.dark },
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
