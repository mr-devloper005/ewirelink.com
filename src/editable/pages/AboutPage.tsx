import Link from 'next/link'
import { ArrowRight, Award, BadgeCheck, Target } from 'lucide-react'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="editable-section bg-[#111] text-white">
        <section className="border-b border-white/10 text-white">
          <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight sm:text-7xl">
              {pagesContent.about.title}
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1340px] border-x border-white/15 bg-[#141414] lg:grid-cols-[1.18fr_0.82fr]">
          <article className="border-b border-white/15 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-16">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {slot4BrandConfig.siteName}</p>
            <p className="mt-6 text-3xl font-bold leading-[1.25] sm:text-4xl">{pagesContent.about.description}</p>
            <div className="mt-10 space-y-6 text-base leading-8 text-white/70">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                ['95%', 'Strategic thinking'],
                ['90%', 'Analytical skills'],
                ['97%', 'Media management'],
              ].map(([score, label]) => (
                <div key={label} className="border border-white/18 p-5">
                  <p className="text-4xl font-black">{score}</p>
                  <p className="mt-2 text-sm font-bold text-white/62">{label}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="grid bg-[#101010]">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="border-b border-white/15 p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between">
                  {[Target, BadgeCheck, Award][index] ? (() => {
                    const Icon = [Target, BadgeCheck, Award][index]
                    return <Icon className="h-8 w-8 text-[var(--slot4-accent)]" />
                  })() : null}
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                </div>
                <h2 className="mt-6 text-3xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="border-y border-white/10 bg-black text-white">
          <div className="mx-auto flex max-w-[1340px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Distribute the stories shaping your market.</h2>
            <Link href="/media-distribution" className="editable-outline-link">Explore the archive <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
