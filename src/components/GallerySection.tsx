import { Filter, Sparkles } from 'lucide-react'

import ArtworkCard from '@/components/ArtworkCard'
import {
  accentColor,
  categories,
  getVisibleArtworks,
  type Artwork,
} from '@/data/exhibition'
import { useGalleryStore } from '@/hooks/useGalleryStore'

type GallerySectionProps = {
  onVote: (artwork: Artwork) => void
}

export default function GallerySection({ onVote }: GallerySectionProps) {
  const selectedCategory = useGalleryStore((state) => state.selectedCategory)
  const setSelectedCategory = useGalleryStore((state) => state.setSelectedCategory)
  const visibleArtworks = getVisibleArtworks(selectedCategory)

  return (
    <section id="gallery" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
            <Sparkles size={14} />
            Highlights
          </div>
          <h2 className="font-display text-4xl text-stone-900 md:text-5xl">
            Featured Artworks
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-3 rounded-full border border-stone-200 bg-stone-50/80 p-2">
            <span className="hidden items-center gap-2 px-2 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400 sm:inline-flex">
              <Filter size={14} />
              Filter
            </span>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition ${
                  selectedCategory === category
                    ? 'text-white shadow-md shadow-[rgba(70,61,40,0.2)]'
                    : 'text-stone-400 hover:bg-white hover:text-stone-700'
                }`}
                style={
                  selectedCategory === category
                    ? { backgroundColor: accentColor }
                    : undefined
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {visibleArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} onVote={onVote} />
          ))}
        </div>
      </div>
    </section>
  )
}
