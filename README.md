# Eights Developer Toolkit

A practical, open-source collection of reusable React + TypeScript components, hooks, and utilities by **Eights**.

The project is designed to give product teams a small, accessible foundation for common interface patterns and everyday frontend tasks.

## What's included

- **UI components** — typed Button, Card, and Input components with accessible defaults.
- **React hooks** — debounced values and persistent state.
- **Utilities** — class-name composition, clamping, currency formatting, and debouncing.
- **Developer experience** — TypeScript declarations, build scripts, linting, and CI.

## Requirements

- Node.js 20+
- React 18 or 19
- TypeScript 5.4+

## Install

This repository is under active development. Until the first npm release, install from GitHub:

```bash
npm install github:eightstudioshel/eights-developer-toolkit
```

Peer dependencies: `react` and `react-dom`.

## Quick start

```tsx
import { Button, Card, Input, cn, useDebounce } from "eights-developer-toolkit";

export function Example() {
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);

  return (
    <Card className="max-w-md space-y-4 p-6">
      <Input
        label="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search projects..."
      />
      <p className="text-sm text-slate-600">Searching for: {debouncedQuery}</p>
      <Button onClick={() => console.log("Search", debouncedQuery)}>
        Search
      </Button>
    </Card>
  );
}
```

> The example uses React state, so import React (or the relevant hooks) in your application.

## Development

```bash
npm install
npm run typecheck
npm run build
```

## Project structure

```
src/
  components/   Accessible, typed UI primitives
  hooks/        Reusable React hooks
  utils/        Framework-independent helpers
  index.ts      Public package API
```

## Design principles

1. Accessibility and semantic HTML first.
2. Small APIs with useful TypeScript types.
3. No hidden network calls or telemetry.
4. Keep dependencies lean.
5. Document behavior and test important edge cases.

## Contributing

Issues and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting changes. Please report security concerns privately as described in [SECURITY.md](SECURITY.md).

## License

MIT © Eights. See [LICENSE](LICENSE).
