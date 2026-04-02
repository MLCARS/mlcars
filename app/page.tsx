import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { QuoteForm } from '@/components/QuoteForm'
import { company, fallbackProducts } from '@/lib/data'
import { getSupabaseServerClient } from '@/lib/supabase'
import { Product } from '@/lib/types'

export default async function HomePage() {
  const supabase = await getSupabaseServerClient()

  let products: Product[] = fallbackProducts

  if (supabase) {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false })

    if (data && data.length > 0) {
   products = data.map((item: any) => ({
  id: String(item.identifiant ?? item.id),
  name: item.nom ?? item.name,
  category: item.catégorie ?? item.categorie ?? item.category,
  price: Number(item.prix ?? item.price),
  image: item.image || '/brand/logo.png',
  description: item.description || '',
  variants: Array.isArray(item.variantes) ? item.variantes : [],
  featured: item['en vedette'] ?? item.featured ?? false,
}))
    }
  }

  const featured = products.find((p) => p.featured) ?? products[0]

  return (
    <div className="min-h-screen text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card-glass overflow-hidden rounded-[36px] shadow-neon">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-white">Boutique premium automobile</span>
                  <span className="rounded-xl bg-fuchsia-500/20 px-3 py-1 text-fuchsia-100">Neon Deluxe</span>
                </div>
                <div className="space-y-4">
                  <Image src="/brand/logo.png" alt="MLCARS" width={340} height={340} className="h-40 w-auto drop-shadow-[0_0_38px_rgba(217,70,239,0.48)] md:h-56" />
                  <h1 className="text-4xl font-black leading-none tracking-tight md:text-6xl">Une boutique ML&apos;CARS premium, prête à vendre.</h1>
                  <p className="max-w-xl text-base leading-7 text-zinc-100 md:text-lg">
                    {company.slogan}. Multimédia automobile, FULL DIP, entretien premium, devis et paiement Mollie dans un univers haut de gamme.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#boutique" className="btn-neon">Explorer la boutique</a>
                  <a href="#devis" className="btn-ghost">Demander un devis</a>
                </div>
              </div>
              <div className="grid gap-4 self-center">
                <div className="rounded-[28px] border border-fuchsia-400/20 bg-white/5 p-5 shadow-neon">
                  <p className="mb-2 text-sm uppercase tracking-[0.28em] text-zinc-300">Produit vedette</p>
                  <p className="text-2xl font-black text-white">{featured?.name}</p>
                  <p className="mt-2 text-zinc-100">{featured?.category}</p>
                  <p className="mt-4 text-4xl font-black text-white">{featured?.price?.toFixed(2)}€</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-cyan-400/20 bg-cyan-400/10 p-4 text-zinc-50">
                    <p className="font-semibold text-white">Effet néon deluxe</p>
                    <p className="mt-1 text-sm text-zinc-100">Palette inspirée du logo et rendu lumineux.</p>
                  </div>
                  <div className="rounded-[24px] border border-pink-400/20 bg-pink-400/10 p-4 text-zinc-50">
                    <p className="font-semibold text-white">Paiement Mollie</p>
                    <p className="mt-1 text-sm text-zinc-100">CB, Apple Pay et autres moyens européens.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-glass rounded-[36px] shadow-neon">
            <div className="space-y-4 p-6">
              <h2 className="text-2xl font-black">Infos boutique</h2>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4 text-zinc-100">
                <p>{company.shipping}</p>
                <p>Livraison offerte au Luxembourg à partir de 200€</p>
                <p>{company.payment}</p>
                <p>{company.legal}</p>
              </div>
              <a href={`https://wa.me/${company.phone.replace(/\D/g, '')}`} className="btn-neon w-full">Contacter sur WhatsApp</a>
            </div>
          </div>
        </section>

        <section id="boutique" className="mt-10 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black">Boutique</h2>
            <a href="/admin" className="btn-ghost">Admin</a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="devis" className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-glass rounded-[34px] p-6">
            <h2 className="text-2xl font-black">Demande de devis</h2>
            <p className="mt-3 text-zinc-200">Pour idées, suggestions clients, questions et projets sur mesure.</p>
            <div className="mt-5 space-y-3 text-zinc-100">
              <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">Nom / téléphone / e-mail</div>
              <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">Marque / modèle / année du véhicule</div>
              <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">Produit ou besoin spécifique</div>
            </div>
          </div>
          <div className="card-glass rounded-[34px] p-6 shadow-neon">
            <h3 className="text-2xl font-black">Formulaire premium</h3>
            <p className="mb-5 mt-2 text-zinc-300">Connecté à Supabase pour centraliser les demandes.</p>
            <QuoteForm />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
