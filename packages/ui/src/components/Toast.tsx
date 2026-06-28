import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Toast.module.css";

/** Trigger function that shows a transient toast message. */
export type ToastFn = (message: string) => void;

const ToastContext = createContext<ToastFn | null>(null);

/**
 * Returns the toast trigger from the nearest {@link ToastProvider}. Throws if
 * called outside a provider so missing setup fails loudly.
 */
export function useToast(): ToastFn {
  const fn = useContext(ToastContext);
  if (!fn) throw new Error("useToast must be used within a ToastProvider");
  return fn;
}

/**
 * Provides a transient toast layer to its subtree. Renders children plus a
 * polite status region that shows the latest message for two seconds. Rapid
 * successive toasts each reset the dismiss timer.
 *
 * @param children - Subtree that can show toasts via {@link useToast}.
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toast = useCallback((msg: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(msg);
    timerRef.current = setTimeout(() => setMessage(null), 2000);
  }, []);

  // Clear any pending dismiss timer if the provider unmounts mid-toast.
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {message && (
        <div role="status" aria-live="polite" className={styles.toast}>
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}
