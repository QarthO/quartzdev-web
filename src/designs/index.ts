import { Card } from './Card'
import { Console } from './Console'
import { Inventory } from './Inventory'
import { Poster } from './Poster'
import { Redstone } from './Redstone'

export const designs = [
  { id: 'redstone', name: 'Redstone', Component: Redstone },
  { id: 'console', name: 'Console', Component: Console },
  { id: 'inventory', name: 'Inventory', Component: Inventory },
  { id: 'poster', name: 'Poster', Component: Poster },
  { id: 'card', name: 'Card', Component: Card },
] as const

export type DesignId = (typeof designs)[number]['id']

export const isDesign = (value: unknown): value is DesignId =>
  designs.some((design) => design.id === value)
