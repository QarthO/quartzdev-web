import { kiln, projects, site, socials } from '@/content/site'

const home = `${site.url}/`
const image = new URL(site.socialImage.path, site.url).href
const id = (name: string) => `${site.url}/#${name}`

/** Every tag a crawler or link preview reads for the home page. */
export function homeHead() {
  return {
    meta: [
      { title: site.title },
      { name: 'description', content: site.description },
      { name: 'author', content: `${site.name} (${site.handle})` },
      { property: 'og:type', content: 'profile' },
      { property: 'og:site_name', content: site.siteName },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:url', content: home },
      { property: 'og:title', content: site.socialTitle },
      { property: 'og:description', content: site.socialDescription },
      { property: 'og:image', content: image },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: String(site.socialImage.width) },
      { property: 'og:image:height', content: String(site.socialImage.height) },
      { property: 'og:image:alt', content: site.socialImage.alt },
      { property: 'profile:first_name', content: site.name },
      { property: 'profile:username', content: site.handle },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: site.xHandle },
      { name: 'twitter:creator', content: site.xHandle },
      { name: 'twitter:title', content: site.socialTitle },
      { name: 'twitter:description', content: site.socialDescription },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: site.socialImage.alt },
    ],
    links: [{ rel: 'canonical', href: home }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(structuredData()) }],
  }
}

/** schema.org graph: the site, this profile page, and the person it's about. */
function structuredData() {
  const marco = projects.find((project) => project.id === 'marco')!
  const modrinth = projects.find((project) => project.id === 'modrinth')!
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': id('website'),
        url: home,
        name: site.siteName,
        publisher: { '@id': id('derek') },
      },
      {
        '@type': 'ProfilePage',
        '@id': id('profile'),
        url: home,
        name: site.title,
        description: site.description,
        isPartOf: { '@id': id('website') },
        mainEntity: { '@id': id('derek') },
      },
      {
        '@type': 'Person',
        '@id': id('derek'),
        name: site.name,
        alternateName: site.handle,
        url: home,
        jobTitle: site.role,
        homeLocation: { '@type': 'City', name: site.location },
        worksFor: {
          '@type': 'Organization',
          name: 'Marco Technology Consulting, Inc.',
          url: marco.url,
        },
        sameAs: [
          ...socials.filter((social) => social.id !== 'discord').map((social) => social.url),
          modrinth.url,
        ],
        knowsAbout: ['Game servers', 'Minecraft', 'Self-hosting', 'Web development'],
        subjectOf: {
          '@type': 'SoftwareApplication',
          name: kiln.name,
          url: kiln.url,
          description: kiln.description,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Linux',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
    ],
  }
}
