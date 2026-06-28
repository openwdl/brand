import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Content/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

/** A basic content card. */
export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <h3 style={{ marginBottom: 8 }}>Workflow Description Language</h3>
      <p style={{ margin: 0, color: "var(--text-muted)" }}>
        An open standard for describing data processing workflows.
      </p>
    </Card>
  ),
};
