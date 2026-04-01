import { fallbackProducts } from '@/lib/data'

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white md:px-6">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black">Admin ML&apos;Cars</h1>
          <p className="mt-2 text-zinc-300">Version prête à connecter à Supabase Auth et aux tables produits/commandes/devis.</p>
        </div>
        <a href="/" className="btn-ghost">Retour</a>
      </div>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card-glass p-6">
          <h2 className="text-2xl font-bold">Actions prévues</h2>
          <ul className="mt-4 space-y-3 text-zinc-200">
            <li>Ajouter / modifier / supprimer des produits</li>
            <li>Gérer les variantes et les photos</li>
            <li>Consulter les commandes Mollie</li>
            <li>Répondre aux demandes de devis</li>
            <li>Modifier les textes de la page d’accueil</li>
          </ul>
        </div>
        <div className="card-glass p-6">
          <h2 className="text-2xl font-bold">Catalogue actuel</h2>
          <div className="mt-4 space-y-3">
            {fallbackProducts.map((product) => (
              <div key={product.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="text-sm text-zinc-300">{product.category} · {product.variants.join(' • ')}</p>
                  </div>
                  <p className="text-lg font-bold">{product.price.toFixed(2)}€</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
