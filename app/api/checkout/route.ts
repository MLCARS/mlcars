import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json()
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Panier vide.' }, { status: 400 })
    }

    const mollieKey = process.env.MOLLIE_API_KEY
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

    if (!mollieKey || !siteUrl) {
      return NextResponse.json({ error: 'Variables Mollie ou URL du site manquantes.' }, { status: 500 })
    }

    const total = items.reduce((sum: number, item: { price: number; quantity?: number }) => {
      return sum + Number(item.price) * Number(item.quantity ?? 1)
    }, 0)

    const description = items.map((i: { name: string }) => i.name).join(', ').slice(0, 120)

    const response = await fetch('https://api.mollie.com/v2/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${mollieKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: {
          currency: 'EUR',
          value: total.toFixed(2)
        },
        description,
        redirectUrl: `${siteUrl}/success`,
        cancelUrl: `${siteUrl}/cancel`,
        webhookUrl: `${siteUrl}/api/webhooks/mollie`,
        metadata: {
          items
        }
      })
    })

    const data = await response.json()
    if (!response.ok) {
      return NextResponse.json({ error: data?.detail || 'Erreur Mollie.' }, { status: 500 })
    }

    return NextResponse.json({ checkoutUrl: data?._links?.checkout?.href })
  } catch (error) {
    return NextResponse.json({ error: 'Impossible de créer le paiement.' }, { status: 500 })
  }
}
