import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const id = await req.text()
  if (!id) return NextResponse.json({ ok: false }, { status: 400 })

  // TODO: fetch payment by id from Mollie, then update Supabase order status.
  return NextResponse.json({ ok: true })
}
