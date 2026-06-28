import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  docs: { autodocs: "tag" },
  // Honor a base path when building for GitHub Pages (set by CI in Task 4).
  viteFinal: async (cfg) =>
    process.env.STORYBOOK_BASE
      ? mergeConfig(cfg, { base: process.env.STORYBOOK_BASE })
      : cfg,
};

export default config;
