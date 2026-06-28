import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};
export default meta;

type Story = StoryObj<typeof Link>;

/** An internal link (same tab). */
export const Internal: Story = { args: { href: "/docs", children: "Documentation" } };

/** An external link (new tab, safe rel, auto-detected from the http href). */
export const External: Story = { args: { href: "https://openwdl.org", children: "openwdl.org" } };
