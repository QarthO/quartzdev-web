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
  // A Minecraft grass block, drawn in the game's own greens and dirt browns.
  return (
    <svg className="logo" viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden="true">
      <path d="M8 1 15 4.5 8 8 1 4.5Z" fill="#7fb238" />
      <path d="M1 4.5 8 8v7l-7-3.5Z" fill="#8b5a33" />
      <path d="M15 4.5 8 8v7l7-3.5Z" fill="#6b4426" />
      <path d="M1 4.5 8 8v2L1 6.5Z" fill="#6aa83a" />
      <path d="M15 4.5 8 8v2l7-3.5Z" fill="#558a2c" />
      <path
        d="M3 8.5h1v1H3zM5 10h1v1H5zM2 11h1v1H2zM10 11h1v1h-1zM12 9h1v1h-1zM13 11.5h1v1h-1z"
        fill="#5c3a20"
      />
    </svg>
  )
}
