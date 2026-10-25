# quartzdev.gg

Derek (QarthO)'s portfolio. TanStack Start, React, and Vite; all content lives in
`src/content/site.ts`.

## Run locally

```sh
docker compose up -d
```

Open http://localhost:3220. Without Docker: `pnpm install && pnpm dev --port 3220`.

## Production

```sh
docker build -t quartzdev-web .
docker run -p 3000:3000 quartzdev-web
```

Health check: `GET /api/health`.

## Design studies

Use the bottom-right explorer to choose Foundry, Switchboard, Signal, Monolith, or Desktop.
The choice is saved locally and reflected in `?design=foundry` (or the other design IDs).
An explicit valid URL choice takes priority over the saved preference.

Layouts: `src/designs/layouts.tsx`. Marks and icons: `src/components/marks.tsx`.
Kiln and Marco marks are monochrome adaptations of the existing project artwork;
the plugins and qHotkeys use custom SVG illustrations. Social icons come from Simple Icons.
