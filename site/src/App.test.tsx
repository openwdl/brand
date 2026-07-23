import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App footer", () => {
  it("renders the community actions and brand-page legal notice", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /join slack/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /follow on github/i })).toBeInTheDocument();
    expect(screen.getByText(`© ${new Date().getFullYear()} The OpenWDL Developers.`))
      .toBeInTheDocument();
    expect(screen.getByText(/brand guidelines and assets licensed under/i))
      .toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cc by 4\.0/i })).toBeInTheDocument();
  });
});
