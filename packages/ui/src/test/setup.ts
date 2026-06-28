import "@testing-library/jest-dom/vitest";

// jsdom in this environment does not expose localStorage; provide a minimal
// in-memory implementation so persistence-dependent code can be tested.
if (!("localStorage" in globalThis) || !globalThis.localStorage) {
  const store = new Map<string, string>();
  const localStorageMock: Storage = {
    get length() { return store.size; },
    clear: () => store.clear(),
    getItem: (key) => (store.has(key) ? store.get(key)! : null),
    key: (index) => Array.from(store.keys())[index] ?? null,
    removeItem: (key) => { store.delete(key); },
    setItem: (key, value) => { store.set(key, String(value)); },
  };
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: localStorageMock,
  });
}

// jsdom has no matchMedia; default to "no preference" (does not match dark).
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}
