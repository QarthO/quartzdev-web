import { createFileRoute } from '@tanstack/react-router'

import { projects, site, socials } from '@/content/site'

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

function Home() {
  return (
    <main className="page">
      <header className="hero">
        <h1 className="name">{site.handle}</h1>
        <p className="intro">{site.intro}</p>
        <ul className="socials">
          {socials.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer me">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section className="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.name} className="project">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link.url} target="_blank" rel="noopener noreferrer">
                {project.link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} quartzdev</p>
      </footer>
    </main>
  )
}
