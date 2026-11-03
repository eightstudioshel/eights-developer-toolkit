import { useEffect, useState } from "react";

/** Returns the latest value after it has remained unchanged for the given delay. */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), Math.max(0, delay));
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}
