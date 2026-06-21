import { Calendar, Hash, MousePointer2, ShieldCheck } from 'lucide-react'

import { participationSteps } from '@/data/exhibition'

const stepIcons = [Hash, MousePointer2, ShieldCheck]

export default function ParticipationGuide() {
  return (
    <section className="border-b border-stone-200 bg-[#faf7f1] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
              Participation Guide
            </p>
            <h2 className="font-display text-4xl text-stone-900 md:text-5xl">
              Your vote gives each tradition a present-day audience.
            </h2>
            <p className="text-base leading-8 text-stone-600">
              Follow the official awards flow to discover the exhibition, identify your favorite
              work, and support the cultural story you want the community to spotlight.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 shadow-sm">
            <Calendar size={18} className="text-amber-700" />
            Deadline: December 2026
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {participationSteps.map((step, index) => {
            const Icon = stepIcons[index]

            return (
              <article
                key={step.title}
                className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-stone-900/5 p-3 text-stone-800">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 font-display text-2xl text-stone-900">{step.title}</h3>
                <p className="text-sm leading-7 text-stone-600">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
