import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "Chrome/Nav",
  component: Nav,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Nav>;

/** A header with a wordmark and section links. */
export const Default: Story = {
  args: {
    logo: <strong style={{ color: "var(--accent)" }}>OpenWDL</strong>,
    logoHref: "#",
    links: [
      { href: "#docs", label: "Docs" },
      { href: "#spec", label: "Spec" },
      { href: "#community", label: "Community" },
    ],
  },
};
