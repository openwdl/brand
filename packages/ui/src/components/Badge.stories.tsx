import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Feedback/Badge",
  component: Badge,
  args: { children: "Badge" },
};
export default meta;

type Story = StoryObj<typeof Badge>;

/** Every variant side by side. */
export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge variant="neutral">neutral</Badge>
      <Badge variant="accent">accent</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="danger">danger</Badge>
    </div>
  ),
};
