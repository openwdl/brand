import { render, screen } from "@testing-library/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

describe("ButtonGroup", () => {
  it("renders its buttons inside a group", () => {
    render(
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("group")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
