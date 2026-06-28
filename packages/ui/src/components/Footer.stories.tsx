import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { Link } from "./Link";

const meta: Meta<typeof Footer> = {
  title: "Chrome/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Footer>;

/** Copyright + license on the left, a repository link on the right. */
export const Default: Story = {
  args: {
    copyright: "© 2019 to Present The OpenWDL Developers.",
    license: (
      <>
        Made available under the{" "}
        <Link href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</Link> license.
      </>
    ),
    children: <Link href="https://github.com/openwdl/brand">openwdl/brand</Link>,
  },
};
