import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

// Render the Storybook UI (sidebar + toolbar) dark to match the dark-default
// component canvas. The toolbar theme toggle still switches the canvas itself.
addons.setConfig({ theme: themes.dark });
