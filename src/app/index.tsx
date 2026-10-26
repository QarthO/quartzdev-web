import { createFileRoute } from '@tanstack/react-router'
import { useCallback } from 'react'

import { Switcher } from '@/components/Switcher'
import { site, socials } from '@/content/site'
import { designs, isDesign, type DesignId } from '@/designs'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): { design?: DesignId } =>
    isDesign(search.design) ? { design: search.design } : {},
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
          name: site.name,
          alternateName: site.handle,
          url: site.url,
          jobTitle: site.role,
          homeLocation: { '@type': 'City', name: site.location },
          sameAs: socials.map((link) => link.url),
        }),
      },
    ],
  }),
  component: Home,
})

function Home() {
  const { design = designs[0].id } = Route.useSearch()
  const navigate = Route.useNavigate()
  const select = useCallback(
    (id: DesignId) => navigate({ search: { design: id }, replace: true, resetScroll: false }),
    [navigate],
  )
  const { Component } = designs.find((entry) => entry.id === design)!

  return (
    <>
      <Component />
      <Switcher current={design} onSelect={select} />
    </>
  )
}
