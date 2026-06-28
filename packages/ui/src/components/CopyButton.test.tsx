import { render, screen, act, waitFor } from "@testing-library/react";
import { ToastProvider } from "./Toast";
import { CopyButton } from "./CopyButton";

function setup() {
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.assign(navigator, { clipboard: { writeText } });
  render(
    <ToastProvider>
      <CopyButton value="wdl-source" label="snippet" />
    </ToastProvider>,
  );
  return { writeText };
}

describe("CopyButton", () => {
  it("writes the value to the clipboard and toasts on success", async () => {
    const { writeText } = setup();
    act(() => { screen.getByRole("button", { name: "Copy snippet" }).click(); });
    await waitFor(() => expect(writeText).toHaveBeenCalledWith("wdl-source"));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Copied snippet"));
  });
});
