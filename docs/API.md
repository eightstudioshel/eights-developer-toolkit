# API overview

## Components

### Button

A semantic button with variants `primary`, `secondary`, `outline`, `ghost`, and `danger`; sizes `sm`, `md`, and `lg`; and an optional `fullWidth` prop. All native button attributes are supported.

### Card

A lightweight container. Pass `unstyled` to omit its default border, background, radius, and shadow.

### Input

A forwarded-ref input supporting optional `label`, `hint`, and `error` text. Hint and error messages are connected to the input using accessible description attributes.

## Hooks

- `useDebounce<T>(value, delay?)` — returns a value after it has remained unchanged for the delay (default 300 ms).
- `useLocalStorage<T>(key, initialValue)` — returns a tuple of current value, setter, and remove function. Storage errors are safely ignored.

## Utilities

- `cn(...values)` — joins truthy class names.
- `clamp(value, min, max)` — clamps a number; throws if min exceeds max.
- `formatCurrency(amount, options?)` — formats a number using `Intl.NumberFormat`. Defaults to EUR and en-US.
- `debounce(callback, wait?)` — returns a debounced callback (default 300 ms).

## Styling

The UI primitives use Tailwind CSS utility classes. Consumers should ensure their Tailwind content configuration includes the package's distributed files, or replace the class names to match their own styling system.
