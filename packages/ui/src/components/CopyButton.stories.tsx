import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "./Toast";
import { CopyButton } from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
  title: "Feedback/CopyButton",
  component: CopyButton,
  args: { value: "task hello { command { echo hi } }", label: "WDL" },
  decorators: [(Story) => <ToastProvider><Story /></ToastProvider>],
};
export default meta;

type Story = StoryObj<typeof CopyButton>;

/** Copies a value and shows a confirmation toast. */
export const Default: Story = {};
