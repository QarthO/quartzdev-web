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
  // Side projects: a Minecraft-style potion of redstone, for experiments and tinkering.
  return (
    <svg className="logo" viewBox="0 0 12 13" shapeRendering="crispEdges" aria-hidden="true">
      <path fill="#9b6b43" d="M4 0h4v1H4z" />
      <path fill="#6f4a2c" d="M4 1h4v1H4z" />
      <path
        fill="#d6dbe2"
        d="M4 2h1v2H4zM7 2h1v2H7zM3 4h1v1H3zM8 4h1v1H8zM2 5h1v1H2zM9 5h1v1H9zM1 6h1v5H1zM10 6h1v5h-1zM2 11h1v1H2zM9 11h1v1H9zM3 12h6v1H3z"
      />
      <path fill="#ff4b4b" d="M2 6h8v1H2z" />
      <path fill="#d4161c" d="M2 7h7v4H2zM3 11h5v1H3z" />
      <path fill="#8f0d11" d="M9 7h1v4H9zM8 11h1v1H8z" />
      <path fill="#ffc2c2" d="M3 7h1v2H3z" />
      <path fill="#ff8a8a" d="M6 9h1v1H6zM5 4h1v1H5z" />
    </svg>
  )
}
