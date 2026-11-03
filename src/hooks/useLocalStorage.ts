import { useCallback, useEffect, useState } from "react";

type SetValue<T> = T | ((previous: T) => T);

/** React state synchronized with localStorage, with safe fallbacks when storage is unavailable. */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored === null ? initialValue : (JSON.parse(stored) as T);
    } catch { return initialValue; }
  });
  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* Storage unavailable. */ }
  }, [key, value]);
  const updateValue = useCallback((next: SetValue<T>) => {
    setValue((previous) => typeof next === "function" ? (next as (previous: T) => T)(previous) : next);
  }, []);
  const remove = useCallback(() => {
    try { window.localStorage.removeItem(key); } catch { /* Storage unavailable. */ }
    setValue(initialValue);
  }, [initialValue, key]);
  return [value, updateValue, remove] as const;
}
