import { siDiscord, siGithub, siX } from 'simple-icons'

import type { ProjectId, SocialId } from '@/content/site'

const socialPaths: Record<SocialId, string> = {
  github: siGithub.path,
  x: siX.path,
  discord: siDiscord.path,
}

export function SocialIcon({ id, className = 'icon' }: { id: SocialId; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={socialPaths[id]} />
    </svg>
  )
}

/** Kiln and Marco ship as files; they're drawn through a CSS mask so each design can color them. */
export function ProjectLogo({ id, className = 'logo' }: { id: ProjectId; className?: string }) {
  if (id === 'kiln' || id === 'marco') {
    return <span className={`${className} logo-file logo-${id}`} aria-hidden="true" />
  }
  if (id === 'plugins') {
    // A pickaxe, drawn on the same 12-pixel grid Minecraft items use.
    return (
      <svg
        className={className}
        viewBox="0 0 12 12"
        fill="currentColor"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <path d="M3 0h6v1H3zM2 1h8v1H2zM1 2h2v1H1zM9 2h2v1H9zM1 3h1v1H1zM10 3h1v1h-1zM5 2h2v10H5z" />
      </svg>
    )
  }
  // A keycap with a Q on it.
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="2.5"
        width="20"
        height="19"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M6.5 17.5h11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M12 5.5a4.25 4.25 0 1 0 2.6 7.6l1.4 1.4 1.2-1.2-1.4-1.4A4.25 4.25 0 0 0 12 5.5Zm0 1.9a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7Z"
        fill="currentColor"
      />
    </svg>
  )
}
