import { ProjectLogo, SocialIcon } from '@/components/marks'
import { projects, site, socials } from '@/content/site'

/** A gig-poster layout: the name runs the full height in tie red, the details set beside it. */
export function Poster() {
  return (
    <main className="design d-poster">
      <h1 className="po-name">{site.handle}</h1>

      <div className="po-body">
        <header className="po-head">
          <p className="po-first">{site.name}</p>
          <p className="po-place">
            {site.role} in {site.location}
            <span>{site.coordinates}</span>
          </p>
          <ul className="po-socials">
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noopener noreferrer me">
                  <SocialIcon id={social.id} />
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </header>

        <p className="po-intro">{site.intro}</p>

        <ul className="po-projects" aria-label="Projects">
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <span className="po-logo">
                  <ProjectLogo id={project.id} />
                </span>
                <strong>{project.name}</strong>
                <span className="po-description">{project.description}</span>
                <span className="po-url">{project.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
