export const site = {
  url: 'https://quartzdev.gg',
  title: 'Derek (QarthO) — software developer in Atlanta',
  description:
    'Derek (QarthO) builds Kiln, an open-source game server panel, plus Minecraft plugins and websites, from Atlanta.',
  name: 'Derek',
  handle: 'QarthO',
  role: 'Software developer',
  location: 'Atlanta, Georgia',
  intro: 'I build software for game servers, Minecraft plugins, and websites for small businesses.',
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

export type ProjectId = 'kiln' | 'marco' | 'modrinth' | 'consulting'
export type Project = {
  id: ProjectId
  name: string
  description: string
  label: string
  url: string
  /** The brand's own color; its lamp lights up in it. */
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
    description: 'Paper plugins and GriefPrevention add-ons, published on Modrinth.',
    label: 'modrinth.com/user/QarthO',
    url: 'https://modrinth.com/user/QarthO',
    color: '#1bd96a',
  },
  {
    id: 'consulting',
    name: 'Minecraft server consultant',
    description: 'Setup, performance tuning, and plugin work for Minecraft servers.',
    label: 'Ask on Discord',
    url: 'https://discord.gg/gu76VAtSK5',
    color: '#7fb238',
  },
]
