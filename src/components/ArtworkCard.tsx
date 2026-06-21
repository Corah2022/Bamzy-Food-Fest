import { useState } from 'react'

import { accentColor, type Artwork } from '@/data/exhibition'

type ArtworkCardProps = {
  artwork: Artwork
  onVote: (artwork: Artwork) => void
}

export default function ArtworkCard({ artwork, onVote }: ArtworkCardProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-stone-200" />}

        <img
          src={artwork.image}
          alt={artwork.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition duration-500 ${
            loaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0'
          }`}
        />

        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-white backdrop-blur-md">
          <p className="text-xs font-bold">{artwork.votes} Votes</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">
          {artwork.category}
        </p>
        <h3 className="mb-3 font-display text-[1.7rem] leading-tight text-stone-900">
          {artwork.title}
        </h3>
        <p className="mb-6 text-sm leading-7 text-stone-500">{artwork.description}</p>

        <button
          type="button"
          onClick={() => onVote(artwork)}
          className="mt-auto rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg shadow-[rgba(70,61,40,0.2)] transition hover:brightness-110"
          style={{ backgroundColor: accentColor }}
        >
          Cast Vote
        </button>
      </div>
    </article>
  )
}
