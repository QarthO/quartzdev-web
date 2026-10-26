# quartzdev.gg

Derek (QarthO)'s portfolio. TanStack Start, React, and Vite; all content lives in
`src/content/site.ts`.

## Run locally

```sh
docker compose up -d
```

Open http://localhost:3220. Without Docker: `pnpm install && pnpm dev --port 3220`.

## Production

Every push to `main` publishes a multi-arch image (amd64 and arm64) to GitHub Container Registry
via `.github/workflows/docker.yml`; `v*` tags also get version tags. Pull requests build it as a
check without publishing.

```sh
docker run -p 3000:3000 ghcr.io/qartho/quartzdev-web:latest
```

Or build it yourself:

```sh
docker build -t quartzdev-web .
docker run -p 3000:3000 quartzdev-web
```

Health check: `GET /api/health`.

## Design

One page: a redstone line powered by the quartzdev mark, with each project as a lamp that lights
in its brand color. Kiln is featured first. Logos: quartzdev, Kiln, and Marco live in
`public/logos/`; Modrinth and social icons come from Simple Icons; side projects use the GitHub icon. Font: Geist.

## SEO and link previews

Titles, descriptions, Open Graph/Twitter tags, and JSON-LD live in `src/lib/seo.ts`, with the copy
in `src/content/site.ts`. `/sitemap.xml` and `/robots.txt` are server routes. The 1200×480 preview
card and the app icons are generated from the brand SVGs:

```sh
pnpm social-card
```

## Outbound links

Change external destinations only in `src/content/links.ts`. All project and social links on
the page use local redirects: `/github`, `/x`, `/discord`, `/modrinth`, `/marco`, `/kiln`,
`/kiln-source`, and `/projects` (the GitHub repositories tab).

Redirects return `302` with `Cache-Control: no-store` so destination updates take effect
without a cached permanent redirect. Unknown paths still return 404. Visible project domains
and structured-data URLs are derived from the same destination map.
