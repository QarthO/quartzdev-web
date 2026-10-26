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

| Path                       | Role                                                   |
| -------------------------- | ------------------------------------------------------ |
| `src/content/site.ts`      | Traits, socials, Kiln, other projects, SEO copy        |
| `src/app/index.tsx`        | The page                                               |
| `src/app/__root.tsx`       | Document shell, Geist font face, 404                   |
| `src/components/marks.tsx` | Project logos and social icons                         |
| `src/styles.css`           | All styles and tokens                                  |
| `public/logos/`            | quartzdev, Kiln, and Marco marks in their brand colors |
| `Dockerfile`               | Production image (`srvx`, port 3000)                   |

## Design

Black, grays, and redstone red (`--dust`), set in Geist, over a faint red glow with film grain. Square corners everywhere. Projects are lamps on
a redstone line powered by the quartzdev mark (a power button) at the top; on load the signal
runs down once and each lamp lights up: Kiln orange, Marco green for Marco and Minecraft
Software, and a bare red lamp for side projects. Kiln is the featured lamp with its
own panel and buttons. "Derek" is the large name; QarthO appears beneath it.

Content must fit without scrolling from 1440×900 down to 360×740. Never hide real content or
lock scrolling to fake the fit.
