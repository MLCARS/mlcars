import { company } from '@/lib/data'

export function Footer() {
  return (
    <footer className="mt-12 rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-zinc-100">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <p className="font-semibold text-white">{company.name}</p>
          <p>{company.address}</p>
          <p>{company.phone}</p>
          <p>{company.legal}</p>
        </div>
        <div>
          <p>{company.shipping}</p>
          <p>{company.payment}</p>
          <p>Instagram: {company.instagram}</p>
        </div>
      </div>
    </footer>
  )
}
