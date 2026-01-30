# Contributing to the Pipedream Connect Fork

This is Toolflow's fork of `@pipedream/connect-react`. It adds support for trigger component prop types that the upstream SDK doesn't handle.

## Build & Deploy

### Prerequisites

- Node 18+ (tested with 18.18.2)
- npm

### Building

```bash
cd /path/to/pipedream-connect
npm install
npm run build
```

This produces `dist/connect-react.es.js`, `dist/connect-react.umd.js`, and `dist/connect-react.umd.d.ts`.

**Important:** The `dist/` directory is committed to the repo. The toolflow monorepo consumes this as a git dependency — there is no npm publish step. Consumers get the pre-built `dist/` files directly.

### Deploying changes

1. Make your source changes in `src/`
2. Run `npm run build` to regenerate `dist/`
3. Commit **both** `src/` and `dist/` changes
4. Push to `github.com/toolflow/pipedream-connect`

```bash
git add -A
git commit -m "your message"
git push origin main
```

### When do consumers pick up changes?

The toolflow monorepo references this fork via:

```json
"@pipedream/connect-react": "git+https://github.com/toolflow/pipedream-connect.git"
```

This resolves at `yarn install` time, not at runtime. So:

- **Existing deployments** (staging/prod) are unaffected until their next deploy.
- **Next deploy**: When CI runs `yarn install`, it fetches the latest commit from this repo. That's when the new behavior takes effect.
- There is no independent update path — changes propagate only when toolflow redeploys.

### After pushing

In the toolflow monorepo:

```bash
yarn install
```

This re-fetches the git dependency with the updated `dist/`.

## Architecture

### Trigger prop type support

The upstream SDK only supports action components. Trigger components have additional prop types that need handling:

| Prop type | Component | Default behavior |
|-----------|-----------|-----------------|
| `$.interface.timer` | `ControlTimer` | Bare interval input (override in toolflow with `PipedreamControlTimer`) |
| `$.service.db` | `ControlServiceDb` | Returns `null` (internal key-value store) |
| `$.interface.http` | `ControlInterfaceHttp` | Returns `null` (auto-provisioned webhook URL) |
| `$.interface.apphook` | `ControlInterfaceApphook` | Returns `null` (auto-provisioned app webhook) |

All four are registered in the customization system and can be overridden via `CustomizeProvider` in the consuming app:

```tsx
<CustomizeProvider
  components={{
    ControlTimer: MyCustomTimerComponent,
    ControlServiceDb: MyCustomDbComponent,
    // etc.
  }}
/>
```

### Key files

| File | Purpose |
|------|---------|
| `src/components/Control.tsx` | Switch statement routing prop types to components |
| `src/components/ControlTimer.tsx` | Default timer component |
| `src/components/ControlServiceDb.tsx` | Default no-op for `$.service.db` |
| `src/components/ControlInterfaceHttp.tsx` | Default no-op for `$.interface.http` |
| `src/components/ControlInterfaceApphook.tsx` | Default no-op for `$.interface.apphook` |
| `src/hooks/customization-context.tsx` | Component registry and customization system |
| `src/hooks/form-context.tsx` | `skippablePropTypes` array (legacy, no longer used in rendering loop) |
