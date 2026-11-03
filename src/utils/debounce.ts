/** Creates a debounced function that delays invoking callback until wait milliseconds. */
export function debounce<TArgs extends unknown[]>(callback: (...args: TArgs) => void, wait = 300): (...args: TArgs) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return (...args: TArgs) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), Math.max(0, wait));
  };
}
