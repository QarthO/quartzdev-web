export const site = {
  url: 'https://quartzdev.gg',
  title: 'QarthO — Derek, software developer in Atlanta',
  description:
    'Derek (QarthO) builds game server software, Minecraft plugins, and websites from Atlanta.',
  handle: 'QarthO',
  intro:
    'I’m Derek, a software developer in Atlanta. I build tools for running game servers, write Minecraft plugins, and make websites for small businesses.',
}

export type Link = { label: string; url: string; icon?: 'github' | 'x' | 'discord' }

export const socials: Link[] = [
  { label: 'GitHub', url: 'https://github.com/QarthO', icon: 'github' },
  { label: 'X', url: 'https://x.com/quartzdevgg', icon: 'x' },
  { label: 'Discord', url: 'https://discord.gg/gu76VAtSK5', icon: 'discord' },
]

export type Project = {
  id: 'kiln' | 'marco' | 'minecraft' | 'hotkeys'
  name: string
  description: string
  category: string
  link: Link
}

export const projects: Project[] = [
  {
    id: 'kiln',
    name: 'Kiln',
    description: 'Self-hosted game servers, apps & infrastructure.',
    category: 'Open source',
    link: { label: 'kiln.site', url: 'https://kiln.site' },
  },
  {
    id: 'marco',
    name: 'Marco',
    description: 'My company. Websites & IT for small businesses.',
    category: 'My company',
    link: { label: 'getbacktobiz.com', url: 'https://getbacktobiz.com' },
  },
  {
    id: 'minecraft',
    name: 'Minecraft plugins',
    description: 'Paper plugins & GriefPrevention add-ons.',
    category: 'Game development',
    link: { label: 'github.com/QarthO', url: 'https://github.com/QarthO?tab=repositories' },
  },
  {
    id: 'hotkeys',
    name: 'qHotkeys',
    description: 'Global shortcuts for Electron apps.',
    category: 'Developer tools',
    link: { label: 'github.com/QarthO/qHotkeys', url: 'https://github.com/QarthO/qHotkeys' },
  },
]
