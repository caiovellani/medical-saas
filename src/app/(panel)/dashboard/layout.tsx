import { SidebarDashboard } from '@/app/(panel)/dashboard/components/sidebar'
import type { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarDashboard>{children}</SidebarDashboard>
    </>
  )
}
