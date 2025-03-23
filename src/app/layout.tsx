import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Odonto Pro',
  description: 'Where you can manage your medical clinic!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
