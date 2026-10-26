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

| Path                          | Role                                                |
| ----------------------------- | --------------------------------------------------- |
| `src/content/site.ts`         | Intro, socials, projects, SEO copy                  |
| `src/designs/`                | The five designs: one `.tsx` and one `.css` each    |
| `src/components/marks.tsx`    | Project logos and social icons                      |
| `src/components/Switcher.tsx` | Bottom-right design picker (`?design=`, `[` `]`)    |
| `src/app/__root.tsx`          | Document shell, font faces, 404                     |
| `src/styles.css`              | Shared base, switcher, imports each design's CSS    |
| `public/qartho/`              | QarthO's Minecraft skin renders (from mc-heads.net) |
| `Dockerfile`                  | Production image (`srvx`, port 3000)                |

## Design

The palette comes from QarthO's skin: black suit, gray, and the tie red (`--tie`). Each design
is grounded in what Derek builds and keeps its own typeface and tokens under `.d-<name>`:

- **Redstone** (Archivo): projects are lamps on a redstone line; the signal runs once on load.
- **Console** (Martian Mono): the page boots like a Minecraft server log.
- **Inventory** (Pixelify Sans): socials in armor slots, projects on the hotbar; keys 1–9 select.
- **Poster** (Big Shoulders): the name runs the full height in tie red.
- **Card** (Bricolage Grotesque): a foil player card that tilts to the pointer, projects as a hand.

Every design must fit without scrolling from 1440×900 down to 360×740 and keep clear of the
switcher (`--dock`). Never hide real content or lock scrolling to fake the fit.
