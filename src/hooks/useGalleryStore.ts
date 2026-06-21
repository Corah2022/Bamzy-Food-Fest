import { create } from 'zustand'

import type { ArtworkCategory } from '@/data/exhibition'

type GalleryState = {
  selectedCategory: ArtworkCategory
  setSelectedCategory: (category: ArtworkCategory) => void
}

export const useGalleryStore = create<GalleryState>((set) => ({
  selectedCategory: 'All',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}))
