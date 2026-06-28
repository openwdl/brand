import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Container>;

/** A width-capped, centered content area. */
export const Default: Story = {
  render: () => (
    <Container>
      <div style={{ background: "var(--surface)", color: "var(--text)", padding: 16, border: "1px solid var(--border)" }}>
        Centered, max-width container
      </div>
    </Container>
  ),
};
