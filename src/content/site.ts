export const site = {
  url: 'https://quartzdev.gg',
  title: 'QarthO — Derek, software developer in Atlanta',
  description:
    'Derek (QarthO) builds game server software, Minecraft plugins, and websites from Atlanta.',
  handle: 'QarthO',
  intro:
    'I’m Derek, a software developer in Atlanta. I build tools for running game servers, write Minecraft plugins, and make websites for small businesses.',
}

export type Link = { label: string; url: string }

export const socials: Link[] = [
  { label: 'GitHub', url: 'https://github.com/QarthO' },
  { label: 'X', url: 'https://x.com/quartzdevgg' },
  { label: 'Discord', url: 'https://discord.gg/gu76VAtSK5' },
]

export type Project = { name: string; description: string; link: Link }

export const projects: Project[] = [
  {
    name: 'Kiln',
    description:
      'A free, open-source panel for running game servers, apps, Docker, and databases on machines you own.',
    link: { label: 'kiln.site', url: 'https://kiln.site' },
  },
  {
    name: 'Marco',
    description:
      'My company, Marco Technology Consulting. We design, host, and look after websites for small businesses.',
    link: { label: 'getbacktobiz.com', url: 'https://getbacktobiz.com' },
  },
  {
    name: 'Minecraft plugins',
    description:
      'Paper plugins and GriefPrevention add-ons, from claim block trading to double XP weekends.',
    link: { label: 'github.com/QarthO', url: 'https://github.com/QarthO?tab=repositories' },
  },
  {
    name: 'qHotkeys',
    description: 'Global hotkeys for Electron apps that don’t override the system’s own shortcuts.',
    link: { label: 'github.com/QarthO/qHotkeys', url: 'https://github.com/QarthO/qHotkeys' },
  },
]
