import type { Meta, StoryObj } from "@storybook/react";
import { type ReactNode } from "react";
import { Row } from "./Row";

const Box = ({ children }: { children: ReactNode }) => (
  <div style={{ background: "var(--surface)", color: "var(--text)", padding: 12, border: "1px solid var(--border)" }}>{children}</div>
);

const meta: Meta<typeof Row> = {
  title: "Layout/Row",
  component: Row,
};
export default meta;

type Story = StoryObj<typeof Row>;

/** A horizontal row with a 1rem gap. */
export const Default: Story = {
  render: () => (
    <Row gap="1rem">
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Row>
  ),
};
