import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Divider>;

/** A horizontal rule between blocks of content. */
export const Horizontal: Story = {
  render: () => (
    <div style={{ color: "var(--text)" }}>
      <p>Above</p>
      <Divider />
      <p>Below</p>
    </div>
  ),
};

/** A vertical rule between inline items. */
export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", height: 40, color: "var(--text)" }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
