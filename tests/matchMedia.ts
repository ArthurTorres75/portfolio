import { vi } from "vitest";

type MediaQueryChangeListener = (event: MediaQueryListEvent) => void;

const queryState = new Map<string, boolean>();
const queryListeners = new Map<string, Set<MediaQueryChangeListener>>();

function getListenersFor(query: string): Set<MediaQueryChangeListener> {
  const existing = queryListeners.get(query);
  if (existing) {
    return existing;
  }

  const created = new Set<MediaQueryChangeListener>();
  queryListeners.set(query, created);
  return created;
}

function createMediaQueryList(query: string): MediaQueryList {
  const addEventListener = vi.fn((type: string, listener: MediaQueryChangeListener) => {
    if (type !== "change") {
      return;
    }
    getListenersFor(query).add(listener);
  });

  const removeEventListener = vi.fn((type: string, listener: MediaQueryChangeListener) => {
    if (type !== "change") {
      return;
    }
    getListenersFor(query).delete(listener);
  });

  return {
    get matches() {
      return queryState.get(query) ?? false;
    },
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener,
    removeEventListener,
    dispatchEvent: vi.fn(),
  } as unknown as MediaQueryList;
}

/**
 * Installs a query-aware `window.matchMedia` mock. Unregistered queries keep
 * returning `matches: false`, preserving the previous blanket-mock behavior
 * for every test that never calls `setMediaQueryState`.
 */
export function installMatchMediaMock(): void {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => createMediaQueryList(query)),
  });
}

/**
 * Sets the `matches` value for one or more media queries and notifies any
 * listeners registered via `addEventListener("change", ...)`.
 */
export function setMediaQueryState(overrides: Record<string, boolean>): void {
  for (const [query, matches] of Object.entries(overrides)) {
    queryState.set(query, matches);

    const changeEvent = { matches, media: query } as MediaQueryListEvent;
    for (const listener of getListenersFor(query)) {
      listener(changeEvent);
    }
  }
}

/** Clears all registered query state and listeners between tests. */
export function resetMediaQueryState(): void {
  queryState.clear();
  queryListeners.clear();
}
