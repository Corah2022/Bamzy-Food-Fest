import { describe, expect, it } from 'vitest'

import { getVisibleArtworks } from '@/data/exhibition'

describe('getVisibleArtworks', () => {
  it('returns every artwork when the All category is selected', () => {
    expect(getVisibleArtworks('All')).toHaveLength(8)
  })

  it('returns only paintings when the Painting category is selected', () => {
    const artworks = getVisibleArtworks('Painting')

    expect(artworks).toHaveLength(4)
    expect(artworks.every((artwork) => artwork.category === 'Painting')).toBe(true)
  })

  it('returns only sculptures when the Sculpture category is selected', () => {
    const artworks = getVisibleArtworks('Sculpture')

    expect(artworks).toHaveLength(2)
    expect(artworks.every((artwork) => artwork.category === 'Sculpture')).toBe(true)
  })
})
