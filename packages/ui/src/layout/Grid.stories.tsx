import type { Meta, StoryObj } from "@storybook/react";
import { type ReactNode } from "react";
import { Grid } from "./Grid";

const Box = ({ children }: { children: ReactNode }) => (
  <div style={{ background: "var(--surface)", color: "var(--text)", padding: 12, border: "1px solid var(--border)" }}>{children}</div>
);

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  args: { columns: 3, gap: "1rem" },
};
export default meta;

type Story = StoryObj<typeof Grid>;

/** A three-column grid. */
export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      <Box>1</Box><Box>2</Box><Box>3</Box>
      <Box>4</Box><Box>5</Box><Box>6</Box>
    </Grid>
  ),
};
