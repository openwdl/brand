import { render } from "@testing-library/react";
import { Section } from "./Section";

describe("Section", () => {
  it("renders a section element with its children", () => {
    const { container } = render(<Section>body</Section>);
    const section = container.querySelector("section");
    expect(section).not.toBeNull();
    expect(section).toHaveTextContent("body");
  });
});
