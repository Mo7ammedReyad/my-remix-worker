# Remix on Cloudflare Workers

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy (CI or local)
```bash
npm run deploy
```

### Notes
- Uses static import of the server build (`build/server`) so Wrangler bundles it into the Worker.
- `compatibility_date` set to 2025-07-18 for wider runtime support. You can bump it later.
- Worker name set to `rust-cloudflare` to match your existing deployment.
