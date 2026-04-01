'use client'

import { useState } from 'react'

export function QuoteForm() {
  const [status, setStatus] = useState<string>('')

  async function onSubmit(formData: FormData) {
    setStatus('Envoi...')
    const payload = Object.fromEntries(formData.entries())
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    setStatus(data.ok ? 'Demande envoyée.' : data.error || 'Erreur')
  }

  return (
    <form action={onSubmit} className="grid gap-4 md:grid-cols-2">
      <input name="fullName" placeholder="Nom complet" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" />
      <input name="phone" placeholder="Téléphone" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" />
      <input name="email" placeholder="Adresse e-mail" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:col-span-2" />
      <input name="carBrand" placeholder="Marque du véhicule" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" />
      <input name="carModelYear" placeholder="Modèle / année" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3" />
      <textarea name="request" placeholder="Décris ton besoin..." className="min-h-[150px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:col-span-2" />
      <div className="md:col-span-2 flex flex-wrap items-center gap-3">
        <button className="btn-neon" type="submit">Envoyer la demande</button>
        <span className="text-sm text-zinc-300">{status}</span>
      </div>
    </form>
  )
}
