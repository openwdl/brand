import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

// Render the Storybook UI (sidebar, toolbar, and the autodocs "Docs" pages) in
// dark by default so the chrome matches the dark-default component preview.
addons.setConfig({ theme: themes.dark });
