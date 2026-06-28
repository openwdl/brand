import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

/** A simple inline glyph standing in for a real icon in stories. */
const Glyph = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
    <path d="M8 3.5a.5.5 0 0 1 .5.5v3.5H12a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { label: "Add", children: <Glyph /> },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

/** Default medium icon button. */
export const Default: Story = {};

/** All three sizes side by side. */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <IconButton {...args} size="sm" />
      <IconButton {...args} size="md" />
      <IconButton {...args} size="lg" />
    </div>
  ),
};
