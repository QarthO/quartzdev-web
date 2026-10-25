import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import {
  Desktop,
  designs,
  Foundry,
  Masthead,
  Monolith,
  Signal,
  Switchboard,
  type DesignId,
} from '@/designs/layouts'

import { site, socials } from '@/content/site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: site.title },
      { name: 'description', content: site.description },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'profile' },
      { property: 'og:url', content: site.url },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@quartzdevgg' },
    ],
    links: [{ rel: 'canonical', href: site.url }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Derek',
          alternateName: site.handle,
          url: site.url,
          jobTitle: 'Software developer',
          homeLocation: { '@type': 'City', name: 'Atlanta, Georgia' },
          sameAs: socials.map((link) => link.url),
        }),
      },
    ],
  }),
  component: Home,
})

const layouts = {
  foundry: Foundry,
  switchboard: Switchboard,
  signal: Signal,
  monolith: Monolith,
  desktop: Desktop,
}

function isDesign(value: string | null): value is DesignId {
  return designs.some((design) => design.id === value)
}

function Home() {
  const [selected, setSelected] = useState<DesignId>('foundry')

  useEffect(() => {
    function readDesign() {
      const query = new URLSearchParams(window.location.search).get('design')
      let saved: string | null = null
      try {
        saved = localStorage.getItem('quartzdev-design')
      } catch {
        /* Private storage can be unavailable. */
      }
      setSelected(isDesign(query) ? query : isDesign(saved) ? saved : 'foundry')
    }
    readDesign()
    window.addEventListener('popstate', readDesign)
    return () => window.removeEventListener('popstate', readDesign)
  }, [])

  function selectDesign(id: DesignId) {
    setSelected(id)
    const url = new URL(window.location.href)
    url.searchParams.set('design', id)
    window.history.replaceState(window.history.state, '', url)
    try {
      localStorage.setItem('quartzdev-design', id)
    } catch {
      /* The URL still preserves the selection. */
    }
  }

  const Layout = layouts[selected]
  const current = designs.find((design) => design.id === selected)!

  return (
    <>
      <main className={`portfolio theme-${selected}`}>
        <Masthead />
        <Layout />
        <footer className="page-footer">
          <span>© {new Date().getFullYear()} Derek / quartzdev</span>
          <span>{current.note}</span>
        </footer>
      </main>
      <aside className="design-switcher" aria-label="Design preview controls">
        <div className="switcher-heading">
          <span>Design explorer</span>
          <span aria-live="polite">
            {current.name} <b>{designs.findIndex((design) => design.id === selected) + 1}/5</b>
          </span>
        </div>
        <div className="design-options" role="group" aria-label="Choose a design">
          {designs.map((design, index) => (
            <button
              key={design.id}
              type="button"
              aria-label={`Design ${index + 1}: ${design.name}`}
              aria-pressed={selected === design.id}
              title={design.name}
              onClick={() => selectDesign(design.id)}
            >
              <span className={`design-thumbnail thumb-${design.id}`} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>{index + 1}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  )
}
