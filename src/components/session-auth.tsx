'use client'

import { SessionProvider } from 'next-auth/react'
import type { ReactNode } from 'react'

export function SessionAuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
