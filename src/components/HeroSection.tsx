import { Menu, Users, X, Globe, Award } from 'lucide-react'
import { useState } from 'react'

import { accentColor, heroStats } from '@/data/exhibition'
import foodLogo from '../../food.png'

type HeroSectionProps = {
  onStartVoting: () => void
}

const navLinks = ['Exhibition', 'Artists', 'History']

export default function HeroSection({ onStartVoting }: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="relative overflow-hidden bg-[#f5f1eb] md:border-b md:border-stone-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(219,178,113,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(70,61,40,0.05),_transparent_28%)]" />

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-8 py-8 sm:px-10 lg:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Virginia Arts Festival">
          <img src={foodLogo} className="h-20 w-auto shrink-0 object-contain md:h-24" alt="Food Logo" />
        </a>

        <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700 md:flex">
          {navLinks.map((link) => (
            <a key={link} href="#gallery" className="transition-opacity hover:opacity-60">
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="p-1 text-stone-900 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={34} strokeWidth={2.2} /> : <Menu size={34} strokeWidth={2.2} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-[rgba(70,61,40,0.95)] px-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-8 text-center text-white">
            <a href="#top" onClick={closeMenu} className="text-2xl font-medium">
              Home
            </a>
            <a href="#gallery" onClick={closeMenu} className="text-2xl font-medium">
              Gallery
            </a>
            <button
              type="button"
              onClick={() => {
                onStartVoting()
                closeMenu()
              }}
              className="rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-[0.22em] text-stone-800"
            >
              Vote Now
            </button>
          </div>
        </div>
      )}

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-8 pb-20 pt-4 sm:px-10 md:gap-12 md:px-6 md:pb-20 md:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div className="space-y-8 text-center lg:text-left">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/90 px-4 py-2 text-amber-700 shadow-sm lg:mx-0">
            <Award size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.16em]">
              People&apos;s Choice Awards 2026
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="font-display text-[clamp(3.9rem,17vw,5.6rem)] leading-[0.9] tracking-[-0.045em] text-stone-900 md:text-7xl md:leading-[1.02] md:tracking-normal">
              <span className="block">Your Voice</span>
              <span className="block font-normal italic" style={{ color: accentColor }}>
                Defines the
              </span>
              <span className="block">Gallery.</span>
            </h1>

            <p className="mx-auto max-w-[21rem] text-base leading-8 text-stone-600 md:max-w-2xl md:text-xl lg:mx-0 lg:max-w-xl">
              Explore a curated collection of masterworks from across the globe. Witness
              centuries of tradition, and cast your vote to crown the most compelling cultural
              highlight of the Virginia Arts Festival.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-1 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={onStartVoting}
              className="w-full max-w-xs rounded-2xl px-10 py-5 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-xl shadow-[rgba(70,61,40,0.22)] transition-transform hover:scale-[1.03] sm:w-auto"
              style={{ backgroundColor: accentColor }}
            >
              Start Voting
            </button>

            <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-white/75 px-4 py-3 text-left shadow-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((avatar) => (
                  <div
                    key={avatar}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-stone-300 to-stone-100"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-stone-500">+2.4k Voting Today</span>
            </div>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="relative aspect-[0.94] overflow-hidden rounded-[2.75rem] shadow-[0_25px_60px_rgba(28,25,23,0.14)] md:aspect-[5/4] md:rounded-[2rem] md:shadow-2xl lg:aspect-square">
            <img
              src="/img/arts_slide.webp"
              className="h-full w-full object-cover"
              alt="Cultural Exhibition"
            />

            <div className="absolute inset-x-6 bottom-6 grid grid-cols-2 gap-4 md:inset-x-5 md:bottom-5">
              <article className="min-h-[9.75rem] rounded-[2rem] border border-white/30 bg-white/92 p-5 shadow-sm backdrop-blur md:min-h-0 md:rounded-3xl md:p-4">
                <Globe className="mb-3 text-amber-600" size={22} />
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-stone-400">
                  {heroStats[0].label}
                </p>
                <p className="mt-2 text-[1.05rem] font-bold leading-tight text-stone-900 md:mt-1 md:text-sm">
                  {heroStats[0].value}
                </p>
              </article>

              <article className="min-h-[9.75rem] rounded-[2rem] border border-white/30 bg-white/92 p-5 shadow-sm backdrop-blur md:min-h-0 md:rounded-3xl md:p-4">
                <Users className="mb-3 text-sky-600" size={22} />
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-stone-400">
                  {heroStats[1].label}
                </p>
                <p className="mt-2 text-[1.05rem] font-bold leading-tight text-stone-900 md:mt-1 md:text-sm">
                  {heroStats[1].value}
                </p>
              </article>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-amber-100 blur-3xl" />
        </div>
      </div>
    </header>
  )
}
