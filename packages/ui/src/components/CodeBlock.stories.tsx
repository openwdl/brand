import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  title: "Content/CodeBlock",
  component: CodeBlock,
};
export default meta;

type Story = StoryObj<typeof CodeBlock>;

/** A highlighted JSON inputs file. */
export const Json: Story = {
  args: {
    lang: "json",
    filename: "inputs.json",
    code: `{
  "main.greeting": "hello",
  "main.shards": 4
}`,
  },
};

/** A WDL snippet (renders as plain monospace until a WDL grammar is added). */
export const Wdl: Story = {
  args: {
    lang: "wdl",
    filename: "main.wdl",
    code: `version 1.2

workflow main {
  input { String greeting }
  call say { input: greeting = greeting }
}`,
  },
};
