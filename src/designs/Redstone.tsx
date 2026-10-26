import { ProjectLogo, SocialIcon } from '@/components/marks'
import { projects, site, socials } from '@/content/site'

/** Projects are lamps on one redstone line. On load the signal runs down it once. */
export function Redstone() {
  return (
    <main className="design d-redstone">
      <div className="rs-layout">
        <header className="rs-identity">
          <div className="rs-player">
            <img
              className="rs-head pixelated"
              src="/qartho/head.png"
              alt=""
              width="48"
              height="48"
            />
            <p>
              {site.name}, {site.role.toLowerCase()} in Atlanta
            </p>
          </div>
          <h1 className="rs-name">{site.handle}</h1>
          <p className="rs-intro">{site.intro}</p>
          <ul className="rs-socials">
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noopener noreferrer me">
                  <SocialIcon id={social.id} />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className="rs-circuit" aria-label="Projects">
          <span className="rs-torch" aria-hidden="true" />
          <span className="rs-bus" aria-hidden="true" />
          <ul>
            {projects.map((project, i) => (
              <li key={project.id} style={{ '--i': i } as React.CSSProperties}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <span className="rs-lamp">
                    <ProjectLogo id={project.id} />
                  </span>
                  <span className="rs-text">
                    <strong>{project.name}</strong>
                    <span className="rs-description">{project.description}</span>
                    <span className="rs-url">{project.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
