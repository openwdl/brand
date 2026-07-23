import type { Meta, StoryObj } from "@storybook/react";
import { OpenWDLNav } from "./OpenWDLNav";

const meta: Meta<typeof OpenWDLNav> = {
  title: "Chrome/Nav",
  component: OpenWDLNav,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof OpenWDLNav>;

/** Canonical global navbar shared by OpenWDL sites. */
export const Default: Story = {
  args: {
    logo: <strong style={{ color: "var(--accent)" }}>OpenWDL</strong>,
  },
};
