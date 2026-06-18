import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="editable-section bg-[#111] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] border-x border-white/15 bg-[#131313] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center border-b border-white/15 p-7 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-white/15 pt-5 text-sm text-white/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="flex flex-col justify-center bg-black/35 p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
