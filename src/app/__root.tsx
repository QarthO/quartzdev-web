/// <reference types="vite/client" />

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'

import geist from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url'

import { site } from '@/content/site'
import styles from '../styles.css?url'

const fontFace = `@font-face{font-family:'Geist';font-style:normal;font-display:swap;font-weight:100 900;src:url(${geist}) format('woff2')}`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'theme-color', content: '#000000' },
      { name: 'color-scheme', content: 'dark' },
    ],
    links: [
      { rel: 'preload', as: 'font', type: 'font/woff2', href: geist, crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: styles },
      { rel: 'icon', type: 'image/svg+xml', href: '/logos/quartzdev.svg' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    styles: [{ children: fontFace }],
  }),
  shellComponent: Shell,
  component: Outlet,
})

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          defer
          src="https://traffic.qdev.gg/kiln-observability.js"
          data-website-id="1a49d95e-d8ae-4f0a-b2dc-3d47bd3ebb5e"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export function NotFound() {
  return (
    <main className="missing">
      {/* React hoists these into <head>; the home route's tags don't apply here. */}
      <title>{`Page not found | ${site.siteName}`}</title>
      <meta name="robots" content="noindex" />
      <p className="missing-code">404</p>
      <h1>There’s no page at this address.</h1>
      <a href="/">Go to {site.siteName}</a>
    </main>
  )
}
