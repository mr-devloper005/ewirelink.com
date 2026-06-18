'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Media', href: '/media-distribution' },
    { label: 'Search', href: '/search' },
    { label: 'About', href: '/about' },
    
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/95 text-white backdrop-blur">
      <div className="mx-auto flex min-h-[74px] max-w-[1340px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-white/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center border border-[var(--slot4-accent)] text-[var(--slot4-accent)]"><img src="/favicon.png" alt="Logo" className="h-8 w-10" /></span>
            <span className="min-w-0">
              <span className="block truncate text-xl font-black leading-none sm:text-2xl">{slot4BrandConfig.siteName}</span>
              <span className="hidden text-[10px] font-black uppercase tracking-[0.24em] text-white/45 sm:block">Media Distribution</span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-white/82 transition hover:text-[var(--slot4-accent)]">{item.label}</Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 text-xs font-black uppercase tracking-[.12em] sm:inline-flex"><UserRound className="h-4 w-4 text-[var(--slot4-accent)]" /> {session.name}</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 text-xs font-black uppercase tracking-[.12em] transition hover:text-[var(--slot4-accent)] sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] transition hover:text-[var(--slot4-accent)] sm:block">Login</Link>}
          <Link href={session ? '/create' : '/signup'} className="inline-flex items-center gap-2 border border-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:bg-[var(--slot4-accent)] sm:px-5">
            <ArrowUpRight className="h-4 w-4" /> {session ? 'Create' : 'Get Started'}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto flex min-h-[50px] max-w-[1340px] items-center px-4 sm:px-6 lg:px-8">
          <p className="hidden text-[11px] font-black uppercase tracking-[.22em] text-[var(--slot4-accent)] md:block">Newswire placement, announcements, PR visibility</p>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center border-l border-white/15 md:max-w-[330px] md:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search media archive" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-[#111] px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-white/15">
            {[...navItems, ...(session ? [{ label: session.name, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-[#151515] px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-[#151515] px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
