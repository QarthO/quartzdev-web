import { useEffect, useState } from 'react'

import { ProjectLogo, SocialIcon } from '@/components/marks'
import { projects, site, socials } from '@/content/site'

const SLOTS = 9

/** A player inventory: socials sit in the armor slots, projects on the hotbar. Keys 1–9 select. */
export function Inventory() {
  const [selected, setSelected] = useState(0)
  const project = projects[selected]

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const slot = Number(event.key)
      if (slot >= 1 && slot <= SLOTS) setSelected(slot - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main className="design d-inventory">
      <div className="inv-panel">
        <div className="inv-top">
          <ul className="inv-armor" aria-label="Social links">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  className="inv-slot"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={social.label}
                  data-tooltip={social.label}
                >
                  <SocialIcon id={social.id} />
                </a>
              </li>
            ))}
          </ul>
          <figure className="inv-player">
            <img
              className="pixelated"
              src="/qartho/body.png"
              alt="QarthO’s Minecraft skin: a black suit with a red tie"
              width="600"
              height="1441"
            />
          </figure>
          <header className="inv-id">
            <h1 className="inv-name">{site.handle}</h1>
            <p className="inv-meta">
              {site.name}, {site.role.toLowerCase()}
              <br />
              {site.location}
            </p>
            <p className="inv-intro">{site.intro}</p>
          </header>
        </div>

        <section className="inv-detail" aria-live="polite">
          {project ? (
            <>
              <span className="inv-detail-logo">
                <ProjectLogo id={project.id} />
              </span>
              <div className="inv-detail-text">
                <h2>{project.name}</h2>
                <p className="inv-kind">{project.kind}</p>
                <p>{project.description}</p>
              </div>
              <a
                className="inv-button"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.label.startsWith('github.com')
                  ? 'Open on GitHub'
                  : `Open ${project.label}`}
              </a>
            </>
          ) : (
            <p className="inv-empty">
              Empty slot. My projects are in slots 1 to {projects.length}.
            </p>
          )}
        </section>

        <div className="inv-hotbar" role="group" aria-label="Projects">
          {Array.from({ length: SLOTS }, (_, i) => {
            const item = projects[i]
            return (
              <button
                key={i}
                type="button"
                className="inv-slot"
                aria-pressed={selected === i}
                aria-label={`Slot ${i + 1}: ${item ? item.name : 'empty'}`}
                onClick={() => setSelected(i)}
              >
                <span className="inv-key" aria-hidden="true">
                  {i + 1}
                </span>
                {item && <ProjectLogo id={item.id} />}
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}
