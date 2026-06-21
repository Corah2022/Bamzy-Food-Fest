import { CheckCircle2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import GallerySection from '@/components/GallerySection'
import HeroSection from '@/components/HeroSection'
import ParticipationGuide from '@/components/ParticipationGuide'
import VoteModal, { type VoteProvider } from '@/components/VoteModal'
import { accentColor, type Artwork } from '@/data/exhibition'

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

type VoteReceipt = {
  artwork: Artwork
  provider: VoteProvider
}

const providerLabels: Record<VoteProvider, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
  twitter: 'X / Twitter',
  microsoft: 'Microsoft',
}

export default function Home() {
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const [activeVoteArtwork, setActiveVoteArtwork] = useState<Artwork | null>(null)
  const [voteReceipt, setVoteReceipt] = useState<VoteReceipt | null>(null)

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleVote = (artwork: Artwork) => {
    setVoteReceipt(null)
    setActiveVoteArtwork(artwork)
  }

  const handleVoteSubmit = async (provider: VoteProvider, artwork: Artwork) => {
    setActiveVoteArtwork(null)

    try {
      await copyText(artwork.hashtag)
    } catch {
      // Keep the vote confirmation feedback even if clipboard access is unavailable.
    }

    setVoteReceipt({ artwork, provider })
  }

  useEffect(() => {
    if (!voteReceipt) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setVoteReceipt(null)
    }, 3200)

    return () => window.clearTimeout(timeoutId)
  }, [voteReceipt])

  return (
    <main id="top" className="min-h-screen bg-[#f5f1eb] text-stone-900">
      <HeroSection onStartVoting={scrollToGallery} />
      <ParticipationGuide />

      <div ref={galleryRef}>
        <GallerySection onVote={handleVote} />
      </div>

      {activeVoteArtwork && (
        <VoteModal
          artwork={activeVoteArtwork}
          onClose={() => setActiveVoteArtwork(null)}
          onSubmitVote={handleVoteSubmit}
        />
      )}

      {voteReceipt && (
        <div className="pointer-events-none fixed bottom-6 right-6 z-40 max-w-sm rounded-[1.75rem] border border-stone-200 bg-white/95 p-5 shadow-2xl backdrop-blur">
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 rounded-full p-2 text-white"
              style={{ backgroundColor: accentColor }}
            >
              <CheckCircle2 size={16} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                Vote Submitted
              </p>
              <p className="mt-1 text-sm font-semibold text-stone-900">
                {voteReceipt.artwork.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-stone-600">
                Signed in with <span className="font-semibold">{providerLabels[voteReceipt.provider]}</span>
                {' '}and copied hashtag <span className="font-semibold">{voteReceipt.artwork.hashtag}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
