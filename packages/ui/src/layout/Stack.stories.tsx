import type { Meta, StoryObj } from "@storybook/react";
import { type ReactNode } from "react";
import { Stack } from "./Stack";

const Box = ({ children }: { children: ReactNode }) => (
  <div style={{ background: "var(--surface)", color: "var(--text)", padding: 12, border: "1px solid var(--border)" }}>{children}</div>
);

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
};
export default meta;

type Story = StoryObj<typeof Stack>;

/** A vertical stack with a 1rem gap. */
export const Default: Story = {
  render: () => (
    <Stack gap="1rem">
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  ),
};
