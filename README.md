# Satni.org frontend

This is a frontend for Divvun's GraphQL [dictionary and term api backend](https://github.com/divvun/satni-backend).

## Tech Stack

This project is built with these web technologies:

- **[React 19](https://react.dev/)** - UI framework
- **[Apollo Client](https://www.apollographql.com/docs/react/)** - GraphQL client with reactive variables for state management
- **[MUI (Material-UI) v7](https://mui.com/)** - Component library
- **[Vite](https://vite.dev/)** - Fast build tool and dev server
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Lingui](https://lingui.dev/)** - Internationalization (i18n)
- **[Vitest](https://vitest.dev/)** - Unit testing
- **[Storybook](https://storybook.js.org/)** - Component development
- **[Biome](https://biomejs.dev/)** - Fast linting and formatting

## Getting Started

### Prerequisites

- Node.js 20+ (see `.nvmrc`)
- pnpm package manager

### Installation

Install all dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The app will be available at <http://localhost:3000>

### Testing

Run tests:

```bash
pnpm test
```

Run tests with UI:

```bash
pnpm test:ui
```

### Storybook

Start Storybook for component development:

```bash
pnpm storybook
```

Storybook will be available at <http://localhost:6006>

### Building

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

### Linting & Formatting

Check code quality:

```bash
pnpm lint
```

Auto-fix issues:

```bash
pnpm lint:fix
```

Format code:

```bash
pnpm format
```

### Internationalization

Add a new locale:

```bash
pnpm add-locale
```

Extract messages for translation:

```bash
pnpm extract
```

Compile translations:

```bash
pnpm compile
```

## Project Structure

- `src/` - Source code
  - `features/` - Feature-based modules
  - `containers/` - Container components
  - `locales/` - Translation files
  - `apolloCache.ts` - Apollo Client reactive variables
- `public/` - Static assets
- Tests are in `*.test.ts(x)` files
- Storybook stories are in `*.stories.ts(x)` files

## Learning Resources

- [React Documentation](https://react.dev/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Vite Guide](https://vite.dev/guide/)
- [Storybook Tutorial](https://storybook.js.org/tutorials/)
- [Lingui Documentation](https://lingui.dev/)
