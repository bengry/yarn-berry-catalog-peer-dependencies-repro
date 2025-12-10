# Yarn Berry v4 Monorepo Reproduction

A minimal Yarn Berry v4 monorepo demonstrating:

- Workspaces
- Catalogs (default and named)
- Multiple React versions in a single repo
- ESM (`"type": "module"`)
- Node v24 with corepack

## Structure

```
apps/
  app-react18/      - React 18 app using @acme/ui-legacy
  app-react19/      - React 19 app using @acme/ui-next
packages/
  form/             - Form utilities with zod (peer dep via catalog)
  ui-legacy/        - Legacy UI stuck on React 18 (deep dep)
  ui-next/          - Modern UI using React 19 (peer dep)
```

## Catalogs

This repo uses Yarn's catalog feature to manage dependencies:

- **Default catalog**: `zod` version shared across all packages
- **Named catalog `react18`**: React 18.x for legacy apps
- **Named catalog `react19`**: React 19.x for modern apps

## Usage

```sh
# Install dependencies
yarn install

# Run dev servers (minimal example)
yarn workspace @acme/app-react18 run dev
yarn workspace @acme/app-react19 run dev
```

## Key Features

- `@acme/ui-legacy` has React 18 as a **deep dependency** (stuck due to 3rd party dep)
- `@acme/ui-next` has React 19 as a **peer dependency**
- `@acme/form` has zod as a **peer dependency** using default catalog
- Both apps use the appropriate UI library for their React version

## Problem

- `@acme/ui-legacy` wants to declare a peer dependency on the legacy apps' React 18 version.
  Similarly, `@acme/ui-next` wants to declare a peer dependency on the repo's React 19 version.
- The [Catalog feature](https://yarnpkg.com/features/catalogs)'s docs [specifies](https://yarnpkg.com/features/catalogs#supported-fields) that the `catalog:` protocol is supported in `peerDependencies`, but this results in an error like:
  > ➤ YN0057: │ @acme/form: Invalid dependency range for 'zod'
  > ➤ YN0057: │ @acme/ui-next: Invalid dependency range for 'react'
  > When running `yarn install`

and then changes them to `*` instead.