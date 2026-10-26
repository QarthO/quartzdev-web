import { ProjectLogo, SocialIcon } from '@/components/marks'
import { projects, site, socials } from '@/content/site'

/** The page boots like a Minecraft server: startup log, plugins enabled, then "Done!". */
export function Console() {
  let line = 0
  const next = () => ({ '--line': line++ }) as React.CSSProperties

  return (
    <main className="design d-console">
      <div className="cs-screen">
        <header className="cs-bar">
          <span className="cs-status">
            <i aria-hidden="true" /> quartzdev.gg
          </span>
          <span className="cs-where">
            {site.location} <span>{site.coordinates}</span>
          </span>
        </header>

        <div className="cs-log">
          <p className="cs-line cs-boot" style={next()}>
            <span className="cs-tag">[INFO]</span> Starting quartzdev.gg
          </p>
          <p className="cs-line" style={next()}>
            <span className="cs-tag">[INFO]</span> Loading player{' '}
            <img
              className="cs-head pixelated"
              src="/qartho/head.png"
              alt=""
              width="16"
              height="16"
            />{' '}
            {site.handle} ({site.name}, {site.role.toLowerCase()})
          </p>

          <h1 className="cs-name" style={next()}>
            {site.handle}
            <span className="cs-cursor" aria-hidden="true" />
          </h1>
          <p className="cs-intro" style={next()}>
            {site.intro}
          </p>

          <p className="cs-line cs-boot" style={next()}>
            <span className="cs-tag">[INFO]</span> Enabling {projects.length} projects
          </p>
          <ul className="cs-projects">
            {projects.map((project) => (
              <li key={project.id} style={next()}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <span className="cs-logo">
                    <ProjectLogo id={project.id} />
                  </span>
                  <span className="cs-project-name">{project.name}</span>
                  <span className="cs-description">{project.description}</span>
                  <span className="cs-url">{project.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="cs-line cs-done" style={next()}>
            <span className="cs-tag">[INFO]</span> Done! {site.handle} is online in Atlanta.
          </p>
        </div>

        <footer className="cs-prompt" style={next()}>
          <span className="cs-caret" aria-hidden="true">
            &gt;
          </span>
          <ul>
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noopener noreferrer me">
                  <SocialIcon id={social.id} />/{social.id}
                  <span className="cs-handle">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </main>
  )
}
