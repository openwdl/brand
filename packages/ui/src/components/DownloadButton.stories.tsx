import type { Meta, StoryObj } from "@storybook/react";
import { DownloadButton } from "./DownloadButton";

const meta: Meta<typeof DownloadButton> = {
  title: "Feedback/DownloadButton",
  component: DownloadButton,
  args: { href: "#", filename: "openwdl-logo.svg", children: "Download SVG" },
};
export default meta;

type Story = StoryObj<typeof DownloadButton>;

/** A download link styled as a pill button. */
export const Default: Story = {};
