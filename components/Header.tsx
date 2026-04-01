import Link from 'next/link'
import Image from 'next/image'
import { company } from '@/lib/data'

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/logo.png" alt="MLCARS" width={64} height={64} className="h-14 w-14 rounded-2xl object-cover shadow-neon" />
          <div>
            <p className="text-xl font-black tracking-[0.18em]">ML&apos;CARS</p>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-300">{company.slogan}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          <a href="#boutique" className="btn-ghost">Boutique</a>
          <a href="#devis" className="btn-ghost">Devis</a>
          <Link href="/admin" className="btn-ghost">Admin</Link>
          <a href={`https://wa.me/${company.phone.replace(/\D/g, '')}`} className="btn-neon">WhatsApp</a>
        </nav>
      </div>
    </header>
  )
}
