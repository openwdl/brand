import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

// Internal type for the toast trigger function exposed via context.
type ToastFn = (message: string) => void;

// Context defaults to null; consumers must be wrapped in ToastProvider.
const ToastContext = createContext<ToastFn | null>(null);

/**
 * Returns the toast trigger function from the nearest ToastProvider ancestor.
 * Throws if called outside a ToastProvider tree, so components fail loudly
 * rather than silently when the context is missing.
 */
export function useToast(): ToastFn {
  const fn = useContext(ToastContext);
  if (!fn) throw new Error("useToast must be used within ToastProvider");
  return fn;
}

/**
 * Provides a transient toast notification layer to its subtree.
 * Renders children alongside a status region that shows a message for 2 seconds
 * whenever the toast function (obtained via {@link useToast}) is called.
 *
 * @param children - React content that will have access to the toast context.
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  // Tracks the active dismiss timer so rapid successive toasts each get the
  // full 2 seconds instead of an earlier toast's timer clearing a later one.
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Dismiss the toast automatically after 2000 ms, resetting any pending timer.
  const toast = useCallback((msg: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(msg);
    timerRef.current = setTimeout(() => setMessage(null), 2000);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {message && (
        // role="status" + aria-live="polite" announce the message to screen readers
        // without interrupting the user's current task.
        <div role="status" aria-live="polite" className="toast">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}
