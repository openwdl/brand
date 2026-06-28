import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
};
export default meta;

type Story = StoryObj<typeof Section>;

/** Two stacked sections showing the vertical rhythm. */
export const Default: Story = {
  render: () => (
    <div style={{ color: "var(--text)" }}>
      <Section style={{ background: "var(--surface)" }}>First section</Section>
      <Section>Second section</Section>
    </div>
  ),
};
