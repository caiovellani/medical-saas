import type { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>Sidebar Teste do Layout</h1>
      {children}
    </>
  )
}
