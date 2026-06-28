import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/theme/theme.css";
import "../src/theme/base.css";
import "../src/theme/fonts.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
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
