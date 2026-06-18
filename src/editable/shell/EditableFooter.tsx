'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="editable-section border-t border-white/12 bg-[#0d0d0d] text-white">
      <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.75fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border border-[var(--slot4-accent)] text-[var(--slot4-accent)]"><img src="/favicon.png" alt="Logo" className="h-8 w-8" /></span>
              <span className="text-3xl font-black">{slot4BrandConfig.siteName}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">{globalContent.footer?.description || 'Media distribution support for announcements, campaigns, press releases, and public visibility.'}</p>
            
          </div>
          <div>
            <h3 className="pb-3 text-lg font-black">Quick Links</h3>
            <div className="mt-4 grid gap-3">
              {[['Home', '/'], ['Media Distribution', '/media-distribution'], ['Search', '/search'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                <Link key={href} href={href} className="group inline-flex items-center gap-3 text-sm font-bold text-white/76 hover:text-[var(--slot4-accent)]"><ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /> {label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-lg font-black">Services</h3>
            <div className="mt-4 grid gap-3">
              {['Press release distribution', 'Newswire visibility', 'Media list planning', 'Campaign reporting', 'Editorial placement support'].map((label) => (
                <Link key={label} href="/media-distribution" className="group inline-flex items-center gap-3 text-sm font-bold text-white/76 hover:text-[var(--slot4-accent)]"><ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /> {label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-lg font-black">Newsletter</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">Get media distribution notes, publication ideas, and campaign visibility updates.</p>
            <form action="/signup" className="mt-6 grid max-w-sm gap-4">
              <input name="email" type="email" placeholder="Your Email" className="min-w-0 border border-white/35 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-white/40" />
              <button className="editable-outline-link w-fit"><ArrowUpRight className="h-4 w-4" /> Subscribe Now</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-7 text-sm text-white/55">
          <p>Copyright {year} (c) {slot4BrandConfig.siteName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {session ? <><Link href="/create" className="hover:text-[var(--slot4-accent)]">{session.name}</Link><button onClick={logout} className="hover:text-[var(--slot4-accent)]">Logout</button></> : <><Link href="/login" className="hover:text-[var(--slot4-accent)]">Login</Link><Link href="/signup" className="hover:text-[var(--slot4-accent)]">Sign up</Link></>}
          </div>
        </div>
      </div>
    </footer>
  )
}
