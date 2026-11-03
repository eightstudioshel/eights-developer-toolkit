# Eights Developer Toolkit

A practical, open-source collection of reusable React + TypeScript components, hooks, and frontend utilities by **Eights**.

The toolkit provides a small, accessible starting point for common interface patterns and everyday frontend tasks.

## What's included

- **UI components** — typed Button, Card, and Input primitives.
- **React hooks** — debounced values and state synchronized with localStorage.
- **Utilities** — class-name composition, clamping, currency formatting, and debouncing.
- **Developer experience** — TypeScript declarations, build scripts, and GitHub Actions CI.

## Requirements

- Node.js 20+
- React 18 or 19
- TypeScript 5.4+

## Install

The project is in early development. Install directly from GitHub:

```bash
npm install github:eightstudioshel/eights-developer-toolkit
```

React and React DOM are peer dependencies and should be installed in your application.

## Quick start

```tsx
import { useState } from "react";
import { Button, Card, Input, useDebounce } from "eights-developer-toolkit";

export function SearchPanel() {
  const [query, setQuery] = useState("");
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

Components use Tailwind CSS utility classes. Make sure your Tailwind setup scans the package's distributed files, or adapt the component styles to your design system.

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
5. Document behavior and important edge cases.

## Contributing

Issues and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting changes. Please report security concerns privately as described in [SECURITY.md](SECURITY.md).

## License

MIT © Eights. See [LICENSE](LICENSE).
