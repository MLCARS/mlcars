import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body.fullName || !body.phone || !body.request) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }

    // Ready to connect to Supabase insert here.
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de l’envoi du devis.' }, { status: 500 })
  }
}
