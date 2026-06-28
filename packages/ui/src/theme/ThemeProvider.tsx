import {
  createContext, useCallback, useContext, useEffect, useState,
  type ReactNode,
} from "react";

/** Available color themes. */
export type Theme = "light" | "dark";

/** Default `localStorage` key for the persisted theme choice. */
export const STORAGE_KEY = "openwdl-theme";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Returns the current theme and setters from the nearest {@link ThemeProvider}.
 * Throws if called outside a provider so missing setup fails loudly.
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

/** Resolves the initial theme: stored value, else system preference, else default. */
function resolveInitialTheme(defaultTheme: Theme, storageKey: string): Theme {
  const stored = typeof localStorage !== "undefined" ? localStorage.getItem(storageKey) : null;
  if (stored === "light" || stored === "dark") return stored;
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return defaultTheme;
}

/**
 * Provides light/dark theming to its subtree. Sets `data-theme` on the document
 * root, initializes from a persisted choice or the user's `prefers-color-scheme`,
 * and persists explicit changes to `localStorage`.
 *
 * @param children     - Subtree that can read the theme via {@link useTheme}.
 * @param defaultTheme - Fallback theme when nothing is stored or preferred (default `"dark"`).
 * @param storageKey   - `localStorage` key for persistence (default {@link STORAGE_KEY}).
 */
export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = STORAGE_KEY,
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(() =>
    resolveInitialTheme(defaultTheme, storageKey),
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next);
      try { localStorage.setItem(storageKey, next); } catch { /* ignore quota/availability */ }
    },
    [storageKey],
  );

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try { localStorage.setItem(storageKey, next); } catch { /* ignore */ }
      return next;
    });
  }, [storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
