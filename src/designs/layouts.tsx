import {
  ArrowIcon,
  Facet,
  LocationIcon,
  ProjectMark,
  QuartzMark,
  SocialIcon,
} from '@/components/marks'
import { projects, socials, type Project } from '@/content/site'

export const designs = [
  { id: 'foundry', name: 'Foundry', note: 'Cut from a different block.' },
  { id: 'switchboard', name: 'Switchboard', note: 'A place for everything I build.' },
  { id: 'signal', name: 'Signal', note: 'A few things in my orbit.' },
  { id: 'monolith', name: 'Monolith', note: 'Small footprint. Strong presence.' },
  { id: 'desktop', name: 'Desktop', note: 'Make yourself at home.' },
] as const

export type DesignId = (typeof designs)[number]['id']

export function Socials({ compact = false }: { compact?: boolean }) {
  return (
    <nav
      className={`social-links${compact ? ' social-links--compact' : ''}`}
      aria-label="Social links"
    >
      {socials.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label={link.label}
        >
          {link.icon && <SocialIcon name={link.icon} />}
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  )
}

export function Masthead() {
  return (
    <header className="masthead">
      <a className="wordmark" href="/" aria-label="quartzdev home">
        <QuartzMark />
        <span>
          quartzdev<span className="domain">.gg</span>
        </span>
      </a>
      <span className="location">
        <LocationIcon /> Atlanta, Georgia
      </span>
    </header>
  )
}

function Identity({ heading = 'QarthO' }: { heading?: string }) {
  return (
    <div className="identity-copy">
      <p className="first-name">Hey, I’m Derek.</p>
      <h1>
        {heading}
        <span className="name-stop">.</span>
      </h1>
      <p className="identity-role">
        Software developer <span>&</span> serial builder.
      </p>
      <p className="identity-description">
        Game servers, Minecraft plugins, and websites for real businesses.
      </p>
    </div>
  )
}

function ProjectLink({
  project,
  children,
  className = '',
}: {
  project: Project
  children?: React.ReactNode
  className?: string
}) {
  return (
    <a
      className={`project-link project-${project.id} ${className}`}
      href={project.link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || (
        <>
          <span className="project-mark">
            <ProjectMark id={project.id} />
          </span>
          <div className="project-copy">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <span className="project-arrow">
            <ArrowIcon />
          </span>
        </>
      )}
    </a>
  )
}

export function Foundry() {
  return (
    <div className="foundry-layout">
      <section className="foundry-identity" aria-label="About Derek">
        <div className="foundry-art">
          <Facet />
          <span className="art-caption">Built with intention.</span>
        </div>
        <Identity />
        <Socials />
      </section>
      <section className="foundry-projects" aria-labelledby="foundry-work">
        <div className="section-caption">
          <h2 id="foundry-work">What I’m building</h2>
          <span>Independent work & everyday tools</span>
        </div>
        <div className="foundry-list">
          {projects.map((project) => (
            <ProjectLink key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ProjectIllustration({ id }: { id: Project['id'] }) {
  if (id === 'kiln') {
    return (
      <div className="server-art" aria-hidden="true">
        {[0, 1, 2].map((n) => (
          <div key={n}>
            <i />
            <span />
            <b />
          </div>
        ))}
      </div>
    )
  }
  if (id === 'marco')
    return <img className="marco-wordmark" src="/logos/marco.svg" alt="" width="190" height="55" />
  if (id === 'minecraft')
    return (
      <div className="voxel-art" aria-hidden="true">
        <ProjectMark id="minecraft" />
        <span />
        <span />
      </div>
    )
  return (
    <div className="keyboard-art" aria-hidden="true">
      <kbd>⌘</kbd>
      <span>+</span>
      <kbd>K</kbd>
    </div>
  )
}

export function Switchboard() {
  return (
    <div className="switchboard-layout">
      <div className="workstation-title">
        <span>
          <i /> Derek’s workspace
        </span>
        <span>Personal / Projects</span>
        <span className="window-controls" aria-hidden="true">
          − &nbsp; □ &nbsp; ×
        </span>
      </div>
      <section className="workstation-profile" aria-label="About Derek">
        <QuartzMark className="profile-emblem" />
        <Identity />
        <Socials />
        <p className="profile-note">Always something in the works.</p>
      </section>
      <section className="workstation-projects" aria-label="Projects">
        {projects.map((project) => (
          <ProjectLink key={project.id} project={project}>
            <div className="panel-top">
              <span className="project-mark">
                <ProjectMark id={project.id} />
              </span>
              <span>{project.category}</span>
              <ArrowIcon />
            </div>
            <div className="project-illustration">
              <ProjectIllustration id={project.id} />
            </div>
            <div className="project-copy">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </ProjectLink>
        ))}
      </section>
    </div>
  )
}

export function Signal() {
  return (
    <div className="signal-layout">
      <svg
        className="signal-wires"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M175 105H330L500 250 670 105H825M175 395H330L500 250 670 395H825" />
        <circle cx="500" cy="250" r="150" />
        <circle cx="500" cy="250" r="175" />
      </svg>
      <section className="signal-identity" aria-label="About Derek">
        <div className="signal-emblem">
          <QuartzMark />
        </div>
        <Identity />
        <Socials compact />
      </section>
      <section className="signal-projects" aria-label="Projects">
        {projects.map((project) => (
          <ProjectLink key={project.id} project={project}>
            <span className="orbit-mark project-mark">
              <ProjectMark id={project.id} />
            </span>
            <div className="project-copy">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="orbit-domain">
                {project.link.label}
                <ArrowIcon />
              </span>
            </div>
          </ProjectLink>
        ))}
      </section>
      <p className="signal-note">Independent projects. Shared curiosity.</p>
    </div>
  )
}

export function Monolith() {
  return (
    <div className="monolith-layout">
      <section className="monolith-identity" aria-label="About Derek">
        <div className="monolith-brand">
          <span>Derek / QarthO</span>
          <span>Atlanta, GA</span>
        </div>
        <QuartzMark className="monolith-emblem" />
        <Identity />
        <Socials />
      </section>
      <section className="monolith-projects" aria-labelledby="monolith-work">
        <div className="section-caption">
          <h2 id="monolith-work">Things I put into the world.</h2>
          <span>Selected projects</span>
        </div>
        <div className="monolith-list">
          {projects.map((project) => (
            <ProjectLink key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export function Desktop() {
  return (
    <div className="desktop-layout">
      <QuartzMark className="desktop-watermark" />
      <div className="desktop-window">
        <div className="desktop-titlebar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>About Derek</span>
          <QuartzMark />
        </div>
        <section className="desktop-identity" aria-label="About Derek">
          <Identity />
          <div className="desktop-avatar">
            <Facet />
          </div>
        </section>
        <div className="desktop-window-footer">
          <span>
            <LocationIcon /> Based in Atlanta
          </span>
          <span>Building for the web & beyond</span>
        </div>
      </div>
      <section className="desktop-launchpad" aria-label="Projects">
        {projects.map((project) => (
          <ProjectLink key={project.id} project={project}>
            <span className="launcher-mark project-mark">
              <ProjectMark id={project.id} />
            </span>
            <div className="project-copy">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </ProjectLink>
        ))}
      </section>
      <div className="desktop-dock">
        <Socials />
        <span className="dock-divider" />
        <span className="dock-note">Find me elsewhere</span>
      </div>
    </div>
  )
}
