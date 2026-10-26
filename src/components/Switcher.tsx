import { useEffect } from 'react'

import { designs, type DesignId } from '@/designs'

/** Bottom-right design picker. `[` and `]` step through the designs. */
export function Switcher({
  current,
  onSelect,
}: {
  current: DesignId
  onSelect: (id: DesignId) => void
}) {
  const index = designs.findIndex((design) => design.id === current)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.target instanceof HTMLElement && event.target.closest('input, textarea')) return
      const step = event.key === ']' ? 1 : event.key === '[' ? -1 : 0
      if (!step) return
      onSelect(designs[(index + step + designs.length) % designs.length].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, onSelect])

  return (
    <nav className="switcher" aria-label="Choose a design">
      <span className="switcher-current" aria-hidden="true">
        {designs[index].name}
      </span>
      <ul>
        {designs.map((design, i) => (
          <li key={design.id}>
            <button
              type="button"
              aria-pressed={design.id === current}
              aria-label={`Design ${i + 1}: ${design.name}`}
              title={`${design.name} ( [ and ] to switch )`}
              onClick={() => onSelect(design.id)}
            >
              <span className="switcher-number">{i + 1}</span>
              <span className="switcher-name">{design.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
