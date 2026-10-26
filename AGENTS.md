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
| `src/app/__root.tsx`       | Document shell, Geist font face, icons, 404            |
| `src/lib/seo.ts`           | Title, meta, Open Graph/Twitter tags, JSON-LD          |
| `src/app/sitemap[.]xml.ts` | Sitemap (`robots[.]txt.ts` points to it)               |
| `scripts/social-card.mjs`  | Builds `public/social-card.*` and PNG icons            |
| `src/components/marks.tsx` | Project logos and social icons                         |
| `src/styles.css`           | All styles and tokens                                  |
| `public/logos/`            | quartzdev, Kiln, and Marco marks in their brand colors |
| `Dockerfile`               | Production image (`srvx`, port 3000)                   |

## Design

Black, grays, and redstone red (`--dust`), set in Geist, over a faint red glow with film grain. Square corners everywhere. Projects are lamps on
a redstone line powered by the quartzdev mark (a power button) at the top; on load the signal
runs down once and each lamp lights up: Kiln orange, Marco green for Marco and Minecraft
Software, and redstone red for side projects (GitHub icon). Kiln is the featured lamp with its
own panel and buttons. "Derek" is the large name; QarthO appears beneath it.

## Link previews

The embed image is a short 1200×480 card (`summary_large_image`), styled after the Kiln and
Marco cards. After changing names, logos, or projects, run `pnpm social-card` and commit the
regenerated `public/social-card.svg`, `social-card.png`, and icon PNGs.

Content must fit without scrolling from 1440×900 down to 360×740. Never hide real content or
lock scrolling to fake the fit.
