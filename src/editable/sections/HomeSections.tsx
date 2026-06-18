import Link from 'next/link'
import { ArrowRight, BarChart3, BadgeDollarSign, Megaphone, Newspaper, Search, Send, Share2, Target } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

const stats = [
  ['10+', 'Years of campaign experience'],
  ['1,250+', 'Media updates distributed'],
  ['1.5K', 'Publisher and audience signals'],
  ['350+', 'Coverage wins tracked'],
]

const services = [
  { icon: Newspaper, title: 'Press Release Distribution', body: 'Package launches, announcements, and company updates for fast public discovery.' },
  { icon: Target, title: 'Audience Targeting', body: 'Align categories, topics, and search signals with the media audience you need to reach.' },
  { icon: Share2, title: 'Newswire Visibility', body: 'Create a clearer path from campaign message to searchable media archive.' },
  { icon: BarChart3, title: 'Campaign Reporting', body: 'Surface outcomes, summaries, source links, and follow-up signals in one distribution flow.' },
  { icon: BadgeDollarSign, title: 'Sponsored Announcements', body: 'Support paid visibility, partner updates, and commercial news without clutter.' },
  { icon: Megaphone, title: 'Editorial Placement Support', body: 'Build stronger story angles for releases, media kits, and announcement pages.' },
]

const brandHeroImage =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1600 900%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 x2=%221%22 y1=%220%22 y2=%221%22%3E%3Cstop offset=%220%22 stop-color=%22%23060606%22/%3E%3Cstop offset=%22.58%22 stop-color=%22%23131313%22/%3E%3Cstop offset=%221%22 stop-color=%22%23562212%22/%3E%3C/linearGradient%3E%3Cfilter id=%22s%22 x=%22-20%25%22 y=%22-20%25%22 width=%22140%25%22 height=%22140%25%22%3E%3CfeDropShadow dx=%220%22 dy=%2228%22 stdDeviation=%2228%22 flood-color=%22%23000000%22 flood-opacity=%22.45%22/%3E%3C/filter%3E%3C/defs%3E%3Crect width=%221600%22 height=%22900%22 fill=%22url(%23g)%22/%3E%3Cg opacity=%22.16%22 stroke=%22%23ffffff%22 stroke-width=%221%22%3E%3Cpath d=%22M320 0v900M640 0v900M960 0v900M1280 0v900M0 225h1600M0 450h1600M0 675h1600%22/%3E%3C/g%3E%3Ccircle cx=%22350%22 cy=%22335%22 r=%22205%22 fill=%22%23ff5a1f%22 opacity=%22.72%22/%3E%3Cg filter=%22url(%23s)%22%3E%3Crect x=%22695%22 y=%22200%22 width=%22570%22 height=%22365%22 fill=%22%23f4f4f4%22 opacity=%22.94%22/%3E%3Crect x=%22735%22 y=%22245%22 width=%22210%22 height=%2225%22 fill=%22%23111111%22 opacity=%22.88%22/%3E%3Crect x=%22735%22 y=%22295%22 width=%22470%22 height=%2218%22 fill=%22%23111111%22 opacity=%22.28%22/%3E%3Crect x=%22735%22 y=%22335%22 width=%22390%22 height=%2218%22 fill=%22%23111111%22 opacity=%22.28%22/%3E%3Crect x=%22735%22 y=%22405%22 width=%2274%22 height=%2295%22 fill=%22%23ff5a1f%22/%3E%3Crect x=%22835%22 y=%22365%22 width=%2274%22 height=%22135%22 fill=%22%23111111%22 opacity=%22.76%22/%3E%3Crect x=%22935%22 y=%22305%22 width=%2274%22 height=%22195%22 fill=%22%23ff5a1f%22 opacity=%22.85%22/%3E%3Crect x=%221035%22 y=%22395%22 width=%2274%22 height=%22105%22 fill=%22%23111111%22 opacity=%22.62%22/%3E%3Ccircle cx=%221165%22 cy=%22435%22 r=%2265%22 fill=%22none%22 stroke=%22%23ff5a1f%22 stroke-width=%2222%22/%3E%3Ccircle cx=%221165%22 cy=%22435%22 r=%2232%22 fill=%22none%22 stroke=%22%23111111%22 stroke-width=%2222%22 opacity=%22.78%22/%3E%3C/g%3E%3Cg fill=%22none%22 stroke=%22%23ff5a1f%22 stroke-width=%2226%22 stroke-linecap=%22square%22 stroke-linejoin=%22miter%22 opacity=%22.95%22%3E%3Cpath d=%22M1185 170h145v145%22/%3E%3Cpath d=%22M1326 174 1168 332%22/%3E%3C/g%3E%3Cg fill=%22%23ffffff%22 opacity=%22.9%22%3E%3Ccircle cx=%22585%22 cy=%22620%22 r=%2218%22/%3E%3Ccircle cx=%22655%22 cy=%22620%22 r=%2218%22 opacity=%22.55%22/%3E%3Crect x=%22735%22 y=%22602%22 width=%22240%22 height=%2236%22/%3E%3C/g%3E%3C/svg%3E'

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="relative min-h-[650px] overflow-hidden border-b border-white/10 bg-black text-white">
      <img src={brandHeroImage} alt={`${slot4BrandConfig.siteName} media distribution dashboard`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute left-[10%] top-[22%] hidden h-80 w-80 rounded-full bg-[var(--slot4-accent)]/70 md:block editable-float" />
      <div className={`${dc.shell.section} relative grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[1.35fr_.65fr]`}>
        <div className="editable-reveal">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.95] sm:text-7xl lg:text-[7.5rem]">{heroTitle}</h1>
        </div>
        <div className="editable-reveal-delay self-end pb-8">
          <p className="max-w-md text-lg font-semibold leading-8 text-white/82">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className="editable-outline-link">{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-2 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/80 hover:text-[var(--slot4-accent)]">{pagesContent.home.hero.secondaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  return (
    <section className="editable-section bg-[#111] text-white">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="editable-reveal text-center">
              <p className="text-5xl font-black">{value}</p>
              <p className="mt-3 text-base font-black text-white/82">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${dc.shell.section} grid gap-12 py-16 lg:grid-cols-[.95fr_1.05fr] lg:py-24`}>
        <div className="editable-reveal">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">Who we are</p>
          <h2 className="mt-6 max-w-2xl text-5xl font-black leading-[1.08]">Your partners in media distribution.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{pagesContent.home.intro.paragraphs[0]}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pagesContent.home.intro.sidePoints.slice(0, 4).map((point) => (
              <p key={point} className="flex gap-3 text-sm font-bold leading-6 text-white/86"><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--slot4-accent)]" /> {point}</p>
            ))}
          </div>
          <Link href="/about" className="editable-outline-link mt-10">More About Us <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="editable-reveal-delay grid content-center gap-5">
          <div className="ml-auto grid h-24 w-24 place-items-center border border-[var(--slot4-accent)] text-[var(--slot4-accent)]"><ArrowRight className="h-14 w-14 -rotate-45" /></div>
          <div className="grid gap-4">
            {railPosts.slice(0, 4).map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const visiblePosts = posts.slice(0, 6)
  return (
    <section className="editable-section bg-[#151515] text-white">
      <div className={`${dc.shell.section} py-16 lg:py-24`}>
        <div className="mx-auto max-w-3xl text-center editable-reveal">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">What we do</p>
          <h2 className="mt-5 text-5xl font-black leading-tight">Our suite of media distribution solutions</h2>
          <p className="mt-5 text-base leading-8 text-white/68">From press releases to campaign reporting, each service is designed to move a media update from draft to discoverable public story.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.title} href={index < visiblePosts.length ? postHref(primaryTask, visiblePosts[index], primaryRoute) : '/contact'} className="editable-card min-h-[300px] p-7">
              <service.icon className="h-10 w-10 text-[var(--slot4-accent)]" />
              <h3 className="mt-8 max-w-xs text-2xl font-black leading-tight">{service.title}</h3>
              <p className="mt-6 text-sm leading-7 text-white/68">{index < visiblePosts.length ? getEditableExcerpt(visiblePosts[index], 140) : service.body}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em]">Read More <ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 8)
  if (!source.length) return null
  return (
    <section className="editable-section bg-[#111] text-white">
      <div className={`${dc.shell.section} py-16 lg:py-24`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">Our project</p>
            <h2 className="mt-6 text-5xl font-black leading-tight">A look at our media updates</h2>
          </div>
          <Link href={primaryRoute} className="editable-outline-link">View Archive <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {source.slice(0, 2).map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group relative min-h-[420px] overflow-hidden bg-black">
              <img src={getEditablePostImage(post)} alt="" className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${index === 1 ? 'grayscale' : ''}`} />
              <div className="absolute inset-0 bg-black/28" />
              <div className="absolute inset-x-8 bottom-8 bg-black/55 p-6 backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-[0.14em]">{taskLabel(primaryTask)}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight">{post.title}</h3>
                <p className="mt-4 line-clamp-2 text-sm leading-7 text-white/80">{getEditableExcerpt(post, 150)}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-accent)]">Read More <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {source.slice(2, 8).map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 2} />)}
        </div>
        <form action="/search" className="mt-12 grid border border-white/20 bg-black/35 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <h3 className="text-3xl font-black">Search the media distribution archive</h3>
            <p className="mt-2 text-sm text-white/60">Explore every {taskLabel(primaryTask).toLowerCase()} published by {slot4BrandConfig.siteName}.</p>
          </div>
          <label className="mt-5 flex border border-white/25 bg-[#111] sm:mt-0 sm:min-w-[420px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-[var(--slot4-accent)]" />
            <input name="q" placeholder="Search media updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="border-l border-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-white hover:bg-[var(--slot4-accent)]">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-black text-white">
      <div className="relative min-h-[430px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(255,122,43,.55),transparent_28%),linear-gradient(100deg,#050505_0%,#111_50%,#67220d_100%)]" />
        <div className={`${dc.shell.section} relative flex min-h-[430px] flex-col justify-center py-16`}>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.home.cta.badge}</p>
          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.home.cta.title}</h2>
          <p className="mt-6 max-w-3xl text-3xl font-black leading-tight">Let&apos;s create a winning strategy together</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{pagesContent.home.cta.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="editable-outline-link">{pagesContent.home.cta.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-2 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/80 hover:text-[var(--slot4-accent)]">Contact Us <Send className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
