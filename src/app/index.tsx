import { createFileRoute } from '@tanstack/react-router'

import { KilnLogo, ProjectLogo, QuartzdevLogo, SocialIcon } from '@/components/marks'
import { kiln, projects, site, socials } from '@/content/site'
import { homeHead } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: homeHead,
  component: Home,
})

const lamp = (i: number, color: string) => ({ '--i': i, '--brand': color }) as React.CSSProperties

/**
 * Projects are lamps on one redstone line, powered by the quartzdev switch at the top.
 * On load the signal runs down the line once and each lamp lights in its brand's color.
 */
function Home() {
  return (
    <main className="page">
      <header className="identity">
        <h1 className="name">{site.name}</h1>
        <p className="aka">
          aka <strong>{site.handle}</strong>. Based in Atlanta.
        </p>
        <ul className="traits">
          {site.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
        <ul className="socials">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                className={`social-${social.id}`}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={`${social.label}: ${social.handle}`}
              >
                <SocialIcon id={social.id} />
                {social.handle}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section className="circuit" aria-label="What I’m building">
        <a className="switch" href="/" aria-label="quartzdev.gg">
          <QuartzdevLogo />
          <span>quartzdev.gg</span>
        </a>
        <ul>
          <li className="node featured" style={lamp(0, kiln.color)}>
            <Wire />
            <div className="kiln">
              <a className="kiln-head" href={kiln.url} target="_blank" rel="noopener noreferrer">
                <span className="lamp">
                  <KilnLogo />
                </span>
                <h2>{kiln.name}</h2>
                <p className="kiln-tagline">{kiln.tagline}</p>
              </a>
              <p className="kiln-description">{kiln.description}</p>
              <div className="kiln-actions">
                <a
                  className="button button-primary"
                  href={kiln.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Kiln
                </a>
                <a className="button" href={kiln.source} target="_blank" rel="noopener noreferrer">
                  <SocialIcon id="github" />
                  Source code
                </a>
              </div>
            </div>
          </li>
          {projects.map((project, i) => (
            <li key={project.id} className="node" style={lamp(i + 1, project.color)}>
              <Wire />
              <a className="project" href={project.url} target="_blank" rel="noopener noreferrer">
                <span className="lamp">
                  <ProjectLogo id={project.id} />
                </span>
                <span className="project-text">
                  <strong>{project.name}</strong>
                  <span className="project-description">{project.description}</span>
                  <span className="project-url">{project.label}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

function Wire() {
  return (
    <span className="wire" aria-hidden="true">
      <i className="wire-down" />
      <i className="wire-across" />
    </span>
  )
}
