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

## Designs

Five designs share the content in `src/content/site.ts`: Redstone, Console, Inventory, Poster,
and Card. Pick one with the bottom-right switcher or the `[` and `]` keys; the choice is kept in
`?design=` (for example `?design=poster`). Each lives in `src/designs/` as a component and a
stylesheet. Kiln and Marco logos are the existing artwork drawn through a CSS mask; the plugin
pickaxe and qHotkeys keycap are custom SVGs, and social icons come from Simple Icons.
