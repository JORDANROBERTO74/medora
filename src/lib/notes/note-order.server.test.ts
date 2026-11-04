import { describe, expect, it } from 'vitest'
import { getNoteOrderMap } from './note-order.server'

describe('note order map', () => {
  const order = getNoteOrderMap()

  it('maps main, summary and review pages', () => {
    expect(order['/dashboard/reading/internal-medicine/dengue']).toEqual({ layer: 0, chapter: 3 })
    expect(order['/dashboard/reading/summary/internal-medicine/tuberculosis']?.layer).toBe(1)
    expect(order['/dashboard/reading/review/antibiotics']).toEqual({ layer: 0, chapter: 1 })
  })
})
