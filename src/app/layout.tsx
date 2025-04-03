import type { Metadata } from 'next'
import './globals.css'
import { SessionAuthProvider } from '@/components/session-auth'
import { Toaster } from 'sonner'

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
      <body className="antialiased">
        <SessionAuthProvider>
          <Toaster duration={2500} />
          {children}
        </SessionAuthProvider>
      </body>
    </html>
  )
}
