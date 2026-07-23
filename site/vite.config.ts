import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

const ui = (...parts) =>
  path.resolve(__dirname, "../packages/ui/src", ...parts);

export default defineConfig({
  base: "/brand/",
  plugins: [react()],
  resolve: {
    alias: [
      // CSS sub-path exports — must come before the bare-specifier alias.
      { find: "@openwdl/ui/theme.css", replacement: ui("theme/theme.css") },
      { find: "@openwdl/ui/base.css",  replacement: ui("theme/base.css")  },
      { find: "@openwdl/ui/fonts.css", replacement: ui("theme/fonts.css") },
      // Bare specifier → source index so Vite hot-reloads the design system
      // alongside the site with no build step in between.
      { find: "@openwdl/ui", replacement: ui("index.ts") },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
