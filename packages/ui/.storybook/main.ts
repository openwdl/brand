import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  docs: { autodocs: "tag" },
  // Honor a base path when building for GitHub Pages (set by CI in Task 4).
  viteFinal: async (cfg) => {
    if (process.env.STORYBOOK_BASE) cfg.base = process.env.STORYBOOK_BASE;
    return cfg;
  },
};

export default config;
