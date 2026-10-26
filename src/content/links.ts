const githubProfile = 'https://github.com/QarthO'

/** The single source for outbound destinations. The page links to these local paths. */
export const destinations = {
  '/github': githubProfile,
  '/x': 'https://x.com/quartzdevgg',
  '/discord': 'https://discord.gg/rfrnF4qHxc',
  '/modrinth': 'https://modrinth.com/user/QarthO',
  '/marco': 'https://getbacktobiz.com',
  '/kiln': 'https://kiln.site',
  '/kiln-source': 'https://github.com/kiln-site/kiln',
  '/projects': `${githubProfile}?tab=repositories`,
} as const

export type LinkPath = keyof typeof destinations

export function isLinkPath(path: string): path is LinkPath {
  return Object.hasOwn(destinations, path)
}

/** Keep the visible domain in sync with its destination, without query parameters. */
export function linkLabel(path: LinkPath) {
  const url = new URL(destinations[path])
  return `${url.hostname}${url.pathname.replace(/\/$/, '')}`
}
