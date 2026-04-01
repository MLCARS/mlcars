# ML'CARS — Next.js + Supabase + Mollie + Vercel

Ce projet est une base prête à déployer pour remplacer Webador.

## Stack
- Next.js App Router
- Supabase (auth, base de données, admin)
- Mollie (paiement)
- Vercel (hébergement)

## 1) Installation
```bash
npm install
npm run dev
```

## 2) Variables d'environnement
Copier `.env.example` vers `.env.local` puis remplir :
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `MOLLIE_API_KEY`
- `ADMIN_EMAIL`

## 3) Supabase
1. Créer un projet Supabase.
2. Exécuter `supabase/schema.sql` dans l'éditeur SQL.
3. Ajouter les produits dans la table `products`.
4. Brancher ensuite `app/api/quote/route.ts` et le dashboard admin avec des inserts/selects réels.

## 4) Mollie
Le paiement utilise l'endpoint `POST /v2/payments` de Mollie, puis redirige le client vers l'URL de checkout fournie par `_links.checkout.href`..

## 5) Vercel
1. Importer ce dossier dans un repo GitHub.
2. Importer le repo dans Vercel.
3. Ajouter les variables d'environnement dans Vercel..
4. Pointer le domaine `mlcars.lu` vers Vercel.

## 6) À finir pour la prod
- Brancher la lecture des produits depuis Supabase sur la home.
- Brancher l'insertion des devis dans Supabase.
- Ajouter le vrai dashboard admin avec auth Supabase.
- Enregistrer les commandes et les statuts depuis le webhook Mollie.
