/// <reference types="vite/client" />

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'

import archivo from '@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2?url'
import bigShoulders from '@fontsource-variable/big-shoulders/files/big-shoulders-latin-standard-normal.woff2?url'
import bricolage from '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-standard-normal.woff2?url'
import martian from '@fontsource-variable/martian-mono/files/martian-mono-latin-standard-normal.woff2?url'
import pixelify from '@fontsource-variable/pixelify-sans/files/pixelify-sans-latin-wght-normal.woff2?url'

import { site } from '@/content/site'
import styles from '../styles.css?url'

// Browsers only download the faces the current design uses.
const fontFaces = [
  ['Archivo', archivo, '100 900', '62% 125%'],
  ['Big Shoulders', bigShoulders, '100 900', '100%'],
  ['Bricolage Grotesque', bricolage, '200 800', '75% 100%'],
  ['Martian Mono', martian, '100 800', '75% 112.5%'],
  ['Pixelify Sans', pixelify, '400 700', '100%'],
]
  .map(
    ([family, url, weight, stretch]) =>
      `@font-face{font-family:'${family}';font-style:normal;font-display:swap;font-weight:${weight};font-stretch:${stretch};src:url(${url}) format('woff2')}`,
  )
  .join('')

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'theme-color', content: '#000000' },
      { name: 'color-scheme', content: 'dark' },
    ],
    links: [
      { rel: 'preload', as: 'font', type: 'font/woff2', href: archivo, crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: styles },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
    styles: [{ children: fontFaces }],
  }),
  shellComponent: Shell,
  component: Outlet,
})

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
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
      <p className="missing-code">404</p>
      <h1>There’s no page at this address.</h1>
      <a href="/">Go to {site.url.replace('https://', '')}</a>
    </main>
  )
}
