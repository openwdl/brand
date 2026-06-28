/**
 * Primitive design-token values, mirroring the CSS custom properties in
 * `theme.css`. Use for programmatic styling (inline styles, canvas/SVG, charts)
 * where CSS variables are not convenient. Keep in sync with `theme.css`.
 */
export const tokens = {
  color: {
    teal: {
      900: "#205b69", 800: "#29778a", 700: "#3599b2", 600: "#44c5e4",
      500: "#4bd8fa", 400: "#6fe0fb", 300: "#86e5fc", 200: "#acedfd",
      100: "#c7f3fd", 50: "#edfbff",
    },
    gray: {
      900: "#0a0c12", 800: "#0d0f16", 700: "#10131c", 600: "#171b26",
      500: "#242833", 400: "#3a3f4a", 300: "#696e7a", 200: "#9497a1",
      100: "#c7c8cb", 50: "#e8e8e9",
    },
  },
  font: {
    sans: '"Public Sans", system-ui, sans-serif',
    mono: '"Martian Mono", ui-monospace, monospace',
  },
} as const;

/** The shape of the exported {@link tokens} object. */
export type Tokens = typeof tokens;
