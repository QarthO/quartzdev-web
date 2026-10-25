import { siDiscord, siGithub, siX } from 'simple-icons'

import type { Project } from '@/content/site'

export function QuartzMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path
        d="M28 8h44l20 20v44L72 92H28L8 72V28L28 8Zm9 20-9 9v26l9 9h26l9-9V37l-9-9H37Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path d="m57 57 35 35H68L45 69l12-12Z" fill="var(--accent)" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  )
}

export function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function SocialIcon({ name }: { name: 'github' | 'x' | 'discord' }) {
  const icon = { github: siGithub, x: siX, discord: siDiscord }[name]
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

export function ProjectMark({ id }: { id: Project['id'] }) {
  if (id === 'kiln' || id === 'marco') {
    return (
      <img src={`/logos/${id === 'marco' ? 'marco-mark' : id}.svg`} alt="" width="48" height="48" />
    )
  }
  if (id === 'minecraft') {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="m32 5 24 13v28L32 59 8 46V18L32 5Z" fill="currentColor" fillOpacity=".12" />
        <path
          d="m32 5 24 13v28L32 59 8 46V18L32 5Zm0 0v27m24-14L32 32 8 18m24 14v27"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="m20 12 24 14M20 25v15l12 7 12-7V25" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <rect x="5" y="12" width="54" height="40" rx="8" fill="currentColor" fillOpacity=".08" />
      <path d="M14 23h5m6 0h5m6 0h5m6 0h4M14 32h5m6 0h5m6 0h5m6 0h4M17 42h30" />
      <path d="m37 5-5 9h7l-5 9" stroke="var(--accent)" strokeWidth="3" />
    </svg>
  )
}

export function Facet({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 440" fill="none" aria-hidden="true">
      <path d="m200 10 170 105-20 210-150 105L50 325 30 115 200 10Z" fill="#ed3946" />
      <path d="m200 10 65 137-65 283-65-283L200 10Z" fill="#ff6870" />
      <path d="m30 115 105 32L50 325 30 115Z" fill="#a91b2b" />
      <path d="m370 115-105 32 85 178 20-210Z" fill="#c92032" />
      <path d="m135 147 65 283L50 325l85-178Z" fill="#d32b3b" />
      <path d="m265 147-65 283 150-105-85-178Z" fill="#8e1525" />
      <path d="m200 10-65 137L30 115 200 10Z" fill="#ff858a" />
      <path d="m200 10 65 137 105-32L200 10Z" fill="#f34b58" />
    </svg>
  )
}
