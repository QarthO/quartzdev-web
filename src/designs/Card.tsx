import { useRef } from 'react'

import { ProjectLogo, SocialIcon } from '@/components/marks'
import { projects, site, socials } from '@/content/site'

/** A foil player card that tilts toward the pointer, with projects dealt out as a hand. */
export function Card() {
  const card = useRef<HTMLElement>(null)

  function tilt(event: React.PointerEvent<HTMLElement>) {
    const el = card.current
    if (!el || event.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const box = el.getBoundingClientRect()
    const x = (event.clientX - box.left) / box.width
    const y = (event.clientY - box.top) / box.height
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    el.style.setProperty('--ry', `${(x - 0.5) * 16}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * 16}deg`)
  }

  function reset() {
    for (const name of ['--mx', '--my', '--rx', '--ry']) card.current?.style.removeProperty(name)
  }

  return (
    <main className="design d-card">
      <div className="cd-stage">
        <article className="cd-player" ref={card} onPointerMove={tilt} onPointerLeave={reset}>
          <div className="cd-art">
            <img
              className="pixelated"
              src="/qartho/body.png"
              alt="QarthO’s Minecraft skin: a black suit with a red tie"
              width="600"
              height="1441"
            />
          </div>
          <div className="cd-info">
            <h1>{site.handle}</h1>
            <p className="cd-real">{site.name}</p>
            <dl>
              <div>
                <dt>Class</dt>
                <dd>{site.role}</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>
            <ul className="cd-socials">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialIcon id={social.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <span className="cd-foil" aria-hidden="true" />
        </article>

        <section className="cd-hand" aria-label="Projects">
          <p className="cd-intro">{site.intro}</p>
          <ul>
            {projects.map((project, i) => (
              <li key={project.id} style={{ '--i': i } as React.CSSProperties}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <span className="cd-logo">
                    <ProjectLogo id={project.id} />
                  </span>
                  <span className="cd-kind">{project.kind}</span>
                  <strong>{project.name}</strong>
                  <span className="cd-description">{project.description}</span>
                  <span className="cd-url">{project.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
