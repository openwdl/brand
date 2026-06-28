import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

const meta: Meta<typeof Code> = {
  title: "Content/Code",
  component: Code,
  tags: ["autodocs"],
  args: { children: "workflow main" },
};
export default meta;

type Story = StoryObj<typeof Code>;

/** Inline code within a sentence. */
export const Inline: Story = {
  render: (args) => (
    <p style={{ color: "var(--text)" }}>
      Declare a task with the <Code {...args} /> keyword.
    </p>
  ),
};
