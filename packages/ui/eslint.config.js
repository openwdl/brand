import js from "@eslint/js";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";

export default tseslint.config(
  { ignores: ["dist/**", "node_modules/**", "storybook-static/**"] },
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: { jsdoc },
    languageOptions: { globals: { ...globals.browser, ...globals.es2020 } },
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        { publicOnly: true, require: { FunctionDeclaration: true } },
      ],
    },
  },
  {
    files: ["src/**/*.test.{ts,tsx}", "src/test/**"],
    rules: { "jsdoc/require-jsdoc": "off" },
  },
);
