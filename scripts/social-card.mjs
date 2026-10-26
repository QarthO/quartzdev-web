// Builds the 1200×480 link-preview card and the PNG app icons from the brand SVGs.
// Text is outlined with Geist so the SVG renders the same anywhere.
// Run: pnpm social-card
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { Resvg } from '@resvg/resvg-js'
import opentype from 'opentype.js'
import { siDiscord, siGithub, siModrinth, siX } from 'simple-icons'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = (file) => path.join(root, 'public', file)
const fontDir = path.join(root, 'node_modules/geist/dist/fonts/geist-sans')
const font = (weight) =>
  opentype.parse(readFileSync(path.join(fontDir, `Geist-${weight}.ttf`)).buffer)

const black = font('Black')
const semibold = font('SemiBold')
const medium = font('Medium')

const W = 1200
const H = 480
const colors = {
  bg: '#0a0909',
  ink: '#edece9',
  muted: '#8f8b86',
  dust: '#d4161c',
  kiln: '#e9842b',
  marco: '#4b9a51',
}

const num = (v) => +v.toFixed(2)

/** Serializes path commands ourselves; opentype.js's toPathData() can emit NaN. */
function pathData(path) {
  return path.commands
    .map((c) => {
      if (c.type === 'M' || c.type === 'L') return `${c.type}${num(c.x)} ${num(c.y)}`
      if (c.type === 'Q') return `Q${num(c.x1)} ${num(c.y1)} ${num(c.x)} ${num(c.y)}`
      if (c.type === 'C')
        return `C${num(c.x1)} ${num(c.y1)} ${num(c.x2)} ${num(c.y2)} ${num(c.x)} ${num(c.y)}`
      return 'Z'
    })
    .join('')
}

/** Lays out a string glyph by glyph (with kerning and tracking) and returns outlined path data. */
function outline(face, text, x, y, size, tracking = 0) {
  const glyphs = face.stringToGlyphs(text)
  const scale = size / face.unitsPerEm
  let cursor = x
  let d = ''
  glyphs.forEach((glyph, i) => {
    d += pathData(glyph.getPath(cursor, y, size))
    cursor += glyph.advanceWidth * scale + tracking * size
    // Pairs without a kerning entry return NaN.
    if (glyphs[i + 1]) cursor += (face.getKerningValue(glyph, glyphs[i + 1]) || 0) * scale
  })
  return { d, end: cursor - tracking * size }
}

const dataUri = (file) => `data:image/svg+xml;base64,${readFileSync(pub(file)).toString('base64')}`

/** Inlines an SVG file as a nested <svg>; its own embedded images don't render through <image>. */
function inline(file, x, y, size) {
  const source = readFileSync(pub(file), 'utf8')
  const viewBox = source.match(/viewBox="([^"]+)"/)[1]
  const body = source
    .slice(source.indexOf('>', source.indexOf('<svg')) + 1, source.lastIndexOf('</svg>'))
    // Editor metadata (Affinity's serif:*) uses a namespace the card doesn't declare.
    .replace(/\sserif:[\w-]+="[^"]*"/g, '')
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="${viewBox}">${body}</svg>`
}

// ---------- Left: mark, name, handle ----------

const left = 80
const logoSize = 100
const nameSize = 148
const nameBaseline = 234
const capTop = nameBaseline - 0.71 * nameSize
const logoY = Math.round((capTop + nameBaseline) / 2 - logoSize / 2)
const name = outline(black, 'Derek', left + logoSize + 30, nameBaseline, nameSize, -0.055)

// Two lines so the location stays clear of the divider.
const tagSize = 30
const tagBaseline = 300
const aka = outline(medium, 'aka ', left, tagBaseline, tagSize)
const handle = outline(semibold, 'QarthO', aka.end, tagBaseline, tagSize)
const rest = outline(medium, 'Based in the greater Atlanta area', left, tagBaseline + 42, tagSize)

// Handles, each with its platform icon, lined up with "and much more…" on the right.
const handleSize = 24
const handleBaseline = 392
const iconSize = 22
let handleX = left
const handles = [
  { path: siGithub.path, color: colors.ink, text: '@QarthO' },
  { path: siX.path, color: colors.ink, text: '@quartzdevgg' },
  { path: siDiscord.path, color: '#5865f2', text: '@qartho' },
].map((item) => {
  const iconX = handleX
  const text = outline(medium, item.text, iconX + iconSize + 10, handleBaseline, handleSize)
  handleX = text.end + 30
  return { ...item, iconX, text }
})

// ---------- Right: what I build ----------

const divider = Math.round(Math.max(name.end, rest.end, handleX - 30) + 64)
const listX = divider + 64
const tile = 56
const labelSize = 32
const items = [
  {
    label: 'Kiln',
    color: colors.kiln,
    icon: `<image href="${dataUri('logos/kiln.svg')}" x="10" y="10" width="36" height="36"/>`,
  },
  {
    label: 'Marco',
    color: colors.marco,
    icon: `<image href="${dataUri('logos/marco.svg')}" x="12" y="12" width="32" height="32"/>`,
  },
  {
    label: 'Minecraft Software',
    color: colors.marco,
    icon: `<g transform="translate(13 13) scale(1.25)"><path fill="#1bd96a" d="${siModrinth.path}"/></g>`,
  },
]
const rows = items.map((item, i) => {
  const cy = 150 + i * 80
  const label = outline(
    semibold,
    item.label,
    listX + tile + 22,
    cy + labelSize * 0.36,
    labelSize,
    -0.01,
  )
  return { ...item, cy, label }
})
const widest = Math.max(...rows.map((row) => row.label.end))
if (widest > W - 48) throw new Error(`Right column overflows: ${Math.round(widest)}px`)
const more = outline(medium, 'and much more…', listX, 392, 26)

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
<title id="title">Derek (QarthO)</title>
<desc id="desc">Derek, aka QarthO, based in Atlanta. Builds Kiln, runs Marco, and makes Minecraft software.</desc>
<!-- Generated by scripts/social-card.mjs. Palette and Geist type match the site; text is outlined. -->
<defs>
  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#fff" stroke-opacity="0.035"/></pattern>
  <radialGradient id="glow" cx="0.1" cy="1.15" r="0.85"><stop stop-color="#5c0a0f" stop-opacity="0.7"/><stop offset="1" stop-color="${colors.bg}" stop-opacity="0"/></radialGradient>
  <radialGradient id="glow2" cx="0.85" cy="0.35" r="0.55"><stop stop-color="#3a070a" stop-opacity="0.45"/><stop offset="1" stop-color="${colors.bg}" stop-opacity="0"/></radialGradient>
  <filter id="blur" x="-10%" y="-200%" width="120%" height="500%"><feGaussianBlur stdDeviation="10"/></filter>
</defs>
<rect width="${W}" height="${H}" fill="${colors.bg}"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>
<rect width="${W}" height="${H}" fill="url(#glow2)"/>
<rect width="${W}" height="${H}" fill="url(#grid)"/>
${inline('logos/quartzdev.svg', left, logoY, logoSize)}
<path fill="${colors.ink}" d="${name.d}"/>
<path fill="${colors.muted}" d="${aka.d}${rest.d}"/>
<path fill="${colors.ink}" d="${handle.d}"/>
${handles
  .map(
    (item) =>
      `<g transform="translate(${item.iconX} ${handleBaseline - iconSize + 3}) scale(${iconSize / 24})"><path fill="${item.color}" d="${item.path}"/></g>
<path fill="${colors.ink}" d="${item.text.d}"/>`,
  )
  .join('\n')}
<path d="M${divider} 104V376" stroke="#fff" stroke-opacity="0.12" stroke-width="2"/>
${rows
  .map(
    (row) => `<g transform="translate(${listX} ${row.cy - tile / 2})">
  <rect x="1" y="1" width="${tile - 2}" height="${tile - 2}" fill="#0b0b0b" stroke="${row.color}" stroke-opacity="0.8" stroke-width="2"/>
  ${row.icon}
</g>
<path fill="${colors.ink}" d="${row.label.d}"/>`,
  )
  .join('\n')}
<path fill="${colors.muted}" d="${more.d}"/>
<rect y="${H - 4}" width="${W}" height="16" fill="${colors.dust}" opacity="0.7" filter="url(#blur)"/>
<rect y="${H - 4}" width="${W}" height="4" fill="${colors.dust}"/>
</svg>
`

const render = (source, width) =>
  new Resvg(source, { fitTo: { mode: 'width', value: width }, font: { loadSystemFonts: false } })
    .render()
    .asPng()

writeFileSync(pub('social-card.svg'), svg)
writeFileSync(pub('social-card.png'), render(svg, W))

const mark = readFileSync(pub('logos/quartzdev.svg'), 'utf8')
writeFileSync(pub('apple-touch-icon.png'), render(mark, 180))
writeFileSync(pub('icon-192.png'), render(mark, 192))
writeFileSync(pub('icon-512.png'), render(mark, 512))

console.log(
  `social-card.png ${W}×${H}, divider at ${divider}px, right column ends at ${Math.round(widest)}px`,
)
