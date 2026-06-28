import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./Callout";

const meta: Meta<typeof Callout> = {
  title: "Feedback/Callout",
  component: Callout,
  tags: ["autodocs"],
  args: { children: "WDL workflows are portable across execution engines." },
};
export default meta;

type Story = StoryObj<typeof Callout>;

/** All four variants. */
export const All: Story = {
  render: () => (
    <div style={{ maxWidth: 560 }}>
      <Callout variant="note">A neutral informational note.</Callout>
      <Callout variant="tip">A helpful tip for getting started.</Callout>
      <Callout variant="warning">Something to watch out for.</Callout>
      <Callout variant="danger">A destructive or breaking action.</Callout>
    </div>
  ),
};
