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

## Design

One page: a redstone line powered by the quartzdev mark, with each project as a lamp that lights
in its brand color. Kiln is featured first. Logos: quartzdev, Kiln, and Marco live in
`public/logos/`; Modrinth and social icons come from Simple Icons; the Minecraft grass block is a
small inline SVG. Font: Geist.
