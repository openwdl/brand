import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "./Button";

/** A button that fires a toast via {@link useToast}. */
function Demo() {
  const toast = useToast();
  return <Button onClick={() => toast("Copied to clipboard")}>Show toast</Button>;
}

const meta: Meta<typeof Demo> = {
  title: "Feedback/Toast",
  component: Demo,
  decorators: [(Story) => <ToastProvider><Story /></ToastProvider>],
};
export default meta;

type Story = StoryObj<typeof Demo>;

/** Click the button to show a transient toast. */
export const Default: Story = {};
