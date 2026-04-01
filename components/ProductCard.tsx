'use client'

import Image from 'next/image'
import { Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }) {
  async function handleCheckout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }]
      })
    })

    const data = await res.json()
    if (data.checkoutUrl) window.location.href = data.checkoutUrl
    else alert(data.error || 'Paiement indisponible pour le moment.')
  }

  return (
    <article className="card-glass overflow-hidden shadow-neon">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-xl bg-fuchsia-500/20 px-3 py-1 text-sm text-fuchsia-100">{product.category}</span>
          {product.featured ? <span className="rounded-xl bg-white/10 px-3 py-1 text-sm text-white">Vedette</span> : null}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">{product.name}</h3>
          <p className="text-sm text-zinc-200">{product.description}</p>
          <p className="text-sm text-zinc-300">Variantes: {product.variants.join(' • ')}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Prix</p>
            <p className="text-2xl font-black text-white">{product.price.toFixed(2)}€</p>
          </div>
          <button onClick={handleCheckout} className="btn-neon">Acheter</button>
        </div>
      </div>
    </article>
  )
}
