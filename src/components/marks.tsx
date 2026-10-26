import { siDiscord, siGithub, siModrinth, siX } from 'simple-icons'

import type { ProjectId, SocialId } from '@/content/site'

const socialPaths: Record<SocialId, string> = {
  github: siGithub.path,
  x: siX.path,
  discord: siDiscord.path,
}

export function SocialIcon({ id }: { id: SocialId }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={socialPaths[id]} />
    </svg>
  )
}

export function QuartzdevLogo({ className = 'quartzdev-logo' }: { className?: string }) {
  return <img className={className} src="/logos/quartzdev.svg" alt="" width="40" height="40" />
}

export function KilnLogo() {
  return <img className="logo" src="/logos/kiln.svg" alt="" width="64" height="64" />
}

/** Each project's logo in its own colors. */
export function ProjectLogo({ id }: { id: ProjectId }) {
  if (id === 'marco') {
    return <img className="logo" src="/logos/marco.svg" alt="" width="64" height="64" />
  }
  if (id === 'modrinth') {
    return (
      <svg className="logo" viewBox="0 0 24 24" fill="#1bd96a" aria-hidden="true">
        <path d={siModrinth.path} />
      </svg>
    )
  }
  // Side projects live on GitHub.
  return (
    <svg className="logo" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d={siGithub.path} />
    </svg>
  )
}
