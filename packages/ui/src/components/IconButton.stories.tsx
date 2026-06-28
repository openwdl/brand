import type { Meta, StoryObj } from "@storybook/react";
import { FiSearch, FiCopy, FiDownload, FiSettings, FiTrash2 } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
};
export default meta;

type Story = StoryObj<typeof IconButton>;

/** A row of icon buttons for common actions. */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <IconButton label="Search"><FiSearch /></IconButton>
      <IconButton label="Copy"><FiCopy /></IconButton>
      <IconButton label="Download"><FiDownload /></IconButton>
      <IconButton label="Settings"><FiSettings /></IconButton>
      <IconButton label="Delete"><FiTrash2 /></IconButton>
      <IconButton label="View on GitHub"><SiGithub /></IconButton>
    </div>
  ),
};

/** The same icon across all three sizes (icons scale with the button). */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <IconButton label="Settings" size="sm"><FiSettings /></IconButton>
      <IconButton label="Settings" size="md"><FiSettings /></IconButton>
      <IconButton label="Settings" size="lg"><FiSettings /></IconButton>
    </div>
  ),
};
