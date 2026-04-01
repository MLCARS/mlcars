import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ML'CARS",
  description: 'Boutique premium automobile ML’Cars'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
