import { render, screen, act } from "@testing-library/react";
import { ToastProvider, useTheme } from "../index";
import { useToast } from "./Toast";

function Trigger() {
  const toast = useToast();
  return <button onClick={() => toast("Saved")}>fire</button>;
}

describe("ToastProvider / useToast", () => {
  it("shows a message when the toast is triggered", () => {
    render(<ToastProvider><Trigger /></ToastProvider>);
    act(() => { screen.getByText("fire").click(); });
    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });

  it("useToast throws outside a provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Trigger />)).toThrow(/useToast must be used within/);
    spy.mockRestore();
  });

  it("does not affect the unrelated useTheme export", () => {
    expect(typeof useTheme).toBe("function");
  });
});
