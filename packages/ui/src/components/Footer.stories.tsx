import type { Meta, StoryObj } from "@storybook/react";
import { OpenWDLFooter } from "./OpenWDLFooter";

const meta: Meta<typeof OpenWDLFooter> = {
  title: "Chrome/Footer",
  component: OpenWDLFooter,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof OpenWDLFooter>;

/** Canonical footer shared by OpenWDL sites. */
export const Default: Story = {
  args: {
    logo: <strong style={{ fontSize: "1.1rem", color: "var(--accent)" }}>OpenWDL</strong>,
  },
};
