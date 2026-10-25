/// <reference types="vite/client" />

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'

import archivo from '@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2?url'

import { site } from '@/content/site'
import styles from '../styles.css?url'

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
    styles: [
      {
        children: `@font-face{font-family:'Archivo';font-style:normal;font-display:block;font-weight:100 900;font-stretch:62% 125%;src:url(${archivo}) format('woff2')}`,
      },
    ],
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
    <main className="page missing">
      <h1 className="name">404</h1>
      <p className="intro">
        There’s no page at this address. <a href="/">Go to {site.url.replace('https://', '')}</a>
      </p>
    </main>
  )
}
