export const site = {
  url: 'https://quartzdev.gg',
  title: 'Derek (QarthO) — software developer in Atlanta',
  description:
    'Derek (QarthO) builds Kiln, an open-source panel for game servers and more, plus popular Minecraft plugins. Business owner in Atlanta.',
  name: 'Derek',
  handle: 'QarthO',
  role: 'Software developer',
  location: 'Atlanta, Georgia',
  intro: 'I build software for game servers and Minecraft, and I’m a business owner.',
}

export type SocialId = 'github' | 'x' | 'discord'
export type Social = { id: SocialId; label: string; handle: string; url: string }

export const socials: Social[] = [
  { id: 'github', label: 'GitHub', handle: 'QarthO', url: 'https://github.com/QarthO' },
  { id: 'x', label: 'X', handle: 'quartzdevgg', url: 'https://x.com/quartzdevgg' },
  {
    id: 'discord',
    label: 'Discord',
    handle: 'qartho',
    url: 'https://discord.gg/gu76VAtSK5',
  },
]

export type ProjectId = 'kiln' | 'marco' | 'modrinth' | 'hobby'
export type Project = {
  id: ProjectId
  name: string
  description: string
  label: string
  url: string
  /** Lamp border, glow, and link color. */
  color: string
}

export const kiln = {
  name: 'Kiln',
  tagline: 'The panel for everything.',
  description:
    '100% free, open-source panel for your VPS, Docker, Apps, Game Servers and more, all on your own machines.',
  url: 'https://kiln.site',
  source: 'https://github.com/kiln-site/kiln',
  color: '#e9842b',
}

export const projects: Project[] = [
  {
    id: 'marco',
    name: 'Marco',
    description: 'My company. Websites, hosting, and IT for small businesses.',
    label: 'getbacktobiz.com',
    url: 'https://getbacktobiz.com',
    color: '#4b9a51',
  },
  {
    id: 'modrinth',
    name: 'Minecraft Software',
    description: 'Building and maintaining popular plugins like HuskHomes.',
    label: 'modrinth.com/user/QarthO',
    url: 'https://modrinth.com/user/QarthO',
    color: '#4b9a51',
  },
  {
    id: 'hobby',
    name: 'Side projects',
    description: 'Cool tech I build for fun: homelab tools, games, and more.',
    label: 'github.com/QarthO',
    url: 'https://github.com/QarthO?tab=repositories',
    // No logo: a bare redstone lamp, lit in the line's own red.
    color: '#d4161c',
  },
]
