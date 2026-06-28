import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, useTheme } from "./ThemeProvider";

/** Small demo that reads and toggles the theme via {@link useTheme}. */
function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ padding: 24, background: "var(--bg)", color: "var(--text)", borderRadius: 8 }}>
      <p>Active theme: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: 12, padding: "0.5rem 1rem", cursor: "pointer",
          background: "var(--accent)", color: "var(--accent-contrast)",
          border: "none", borderRadius: "var(--radius)",
        }}
      >
        Toggle theme
      </button>
    </div>
  );
}

const meta: Meta<typeof ThemeDemo> = {
  title: "Foundations/ThemeProvider",
  component: ThemeDemo,
  tags: ["autodocs"],
  // Disable the global addon-themes toolbar toggle for this story: the in-story
  // ThemeProvider owns `data-theme` here, so the two must not fight over it.
  parameters: { themes: { disable: true } },
  decorators: [(Story) => <ThemeProvider><Story /></ThemeProvider>],
};
export default meta;

type Story = StoryObj<typeof ThemeDemo>;

/** Provider wrapping a component that toggles the theme at runtime. */
export const Default: Story = {};
