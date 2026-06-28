import { render, screen } from "@testing-library/react";
import { Code } from "./Code";

describe("Code", () => {
  it("renders inline code text", () => {
    render(<Code>String greeting</Code>);
    expect(screen.getByText("String greeting")).toBeInTheDocument();
  });
});
