# AGENTS.md

Derek (QarthO)'s portfolio at https://quartzdev.gg.

- TanStack Start / Router, Vite 8, React 19
- One page, hardcoded content; no CMS or database
- pnpm, Node `>=24.15.0`

Keep it minimal: no contact form, no extra pages. Avoid layout shifts.

## Local development

```sh
docker compose up -d
```

Opens at http://localhost:3220. To open it from another host (e.g. a Tailscale HTTPS URL), set
`SERVER_URL` in `.env` to that URL; Vite uses it for the allowed host and HMR.

Verify design or visual changes in the T3 Preview Browser.

## Layout

| Path                  | Role                                    |
| --------------------- | --------------------------------------- |
| `src/content/site.ts` | Intro, social links, projects, SEO copy |
| `src/app/index.tsx`   | The page                                |
| `src/app/__root.tsx`  | Document shell, font, 404               |
| `src/styles.css`      | All styles and color tokens             |
| `Dockerfile`          | Production image (`srvx`, port 3000)    |

## Design

Black (obsidian), grays (quartz, ash), red (redstone). Red marks only things you can click.
One typeface, Archivo variable; the name uses its widest, heaviest cut and is the page's one
loud element.
