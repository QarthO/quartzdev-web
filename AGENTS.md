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

Five viewport-oriented design studies share hardcoded content and project marks.
`src/designs/layouts.tsx` contains Foundry, Switchboard, Signal, Monolith, and Desktop.
`src/components/marks.tsx` contains SVG marks and social icons; local company assets live in
`public/logos/`. Preserve the black/gray/red palette and the distinct compositions.

The fixed bottom-right switcher persists the selection in localStorage and `?design=`.
Reserve space for it so it never covers project or social links. Fit all content on common
laptop and phone viewports, while allowing scrolling on unusually short screens or when
text is enlarged. Never hide content or lock scrolling to fake a viewport fit.
