import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

/** A primary action paired with secondary and ghost buttons. */
export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Discard</Button>
    </ButtonGroup>
  ),
};
