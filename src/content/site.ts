export const site = {
  url: 'https://quartzdev.gg',
  title: 'QarthO — Derek, software developer in Atlanta',
  description:
    'Derek (QarthO) builds game server software, Minecraft plugins, and websites from Atlanta.',
  handle: 'QarthO',
  name: 'Derek',
  role: 'Software developer',
  location: 'Atlanta, Georgia',
  coordinates: '33.749° N, 84.388° W',
  intro: 'I build software for game servers, Minecraft plugins, and websites for small businesses.',
}

export type SocialId = 'github' | 'x' | 'discord'
export type Social = { id: SocialId; label: string; handle: string; url: string }

export const socials: Social[] = [
  { id: 'github', label: 'GitHub', handle: 'QarthO', url: 'https://github.com/QarthO' },
  { id: 'x', label: 'X', handle: '@quartzdevgg', url: 'https://x.com/quartzdevgg' },
  { id: 'discord', label: 'Discord', handle: 'quartzdev.gg', url: 'https://discord.gg/gu76VAtSK5' },
]

export type ProjectId = 'kiln' | 'marco' | 'plugins' | 'hotkeys'
export type Project = {
  id: ProjectId
  name: string
  kind: string
  description: string
  label: string
  url: string
}

export const projects: Project[] = [
  {
    id: 'kiln',
    name: 'Kiln',
    kind: 'Open source',
    description: 'A free, open-source panel for running game servers on hardware you own.',
    label: 'kiln.site',
    url: 'https://kiln.site',
  },
  {
    id: 'marco',
    name: 'Marco',
    kind: 'My company',
    description: 'Websites, hosting, and IT support for small businesses.',
    label: 'getbacktobiz.com',
    url: 'https://getbacktobiz.com',
  },
  {
    id: 'plugins',
    name: 'Minecraft plugins',
    kind: 'Plugins',
    description: 'Paper plugins and GriefPrevention add-ons for survival servers.',
    label: 'github.com/QarthO',
    url: 'https://github.com/QarthO?tab=repositories',
  },
  {
    id: 'hotkeys',
    name: 'qHotkeys',
    kind: 'Library',
    description: 'Global hotkeys for Electron that leave native shortcuts alone.',
    label: 'github.com/QarthO/qHotkeys',
    url: 'https://github.com/QarthO/qHotkeys',
  },
]
