'use client'

import { usePathname } from 'next/navigation'
import { useState, type ReactNode } from 'react'
import clsx from 'clsx'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Banknote, CalendarCheck2, Folder, List, Settings } from 'lucide-react'
import Link from 'next/link'

export function SidebarDashboard({ children }: { children: ReactNode }) {
  const pathName = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen w-full">
      <div
        className={clsx('flex flex-1 flex-col transition-all duration-300', {
          'md:ml-20': isCollapsed,
          'md:ml-64': !isCollapsed,
        })}
      >
        <header className="md:hidden flex items-center justify-between border-b px-4 md:px-6 h-14 z-10 sticky top-0 bg-white">
          <Sheet>
            <div className="flex items-center gap-2">
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <h1 className="text-base md:text-lg font-semibold">
                Menu OdontoPRO
              </h1>
            </div>
            <SheetContent side="right" className="sm:max-w-xs text-black">
              <SheetTitle>OdontoPRO</SheetTitle>
              <SheetDescription>Menu administrativo</SheetDescription>

              <nav className="grid gap-2 text-base p-5">
                <SidebarLink
                  href="/dashboard"
                  label="Agendamentos"
                  pathName={pathName}
                  isCollapsed={isCollapsed}
                  icon={<CalendarCheck2 className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/services"
                  label="Serviços"
                  pathName={pathName}
                  isCollapsed={isCollapsed}
                  icon={<Folder className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/profile"
                  label="Perfil"
                  pathName={pathName}
                  isCollapsed={isCollapsed}
                  icon={<Settings className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/plans"
                  label="Planos"
                  pathName={pathName}
                  isCollapsed={isCollapsed}
                  icon={<Banknote className="w-6 h-6" />}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex-1 py-4 px-2 md:p-6">{children}</main>
      </div>
    </div>
  )
}

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  pathName: string
  isCollapsed: boolean
}

function SidebarLink({
  href,
  icon,
  label,
  pathName,
  isCollapsed,
}: SidebarLinkProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          'flex items-center gap-2  px-3 py-2 rounded-md  transition-colors',
          {
            'text-white bg-blue-500': pathName === href,
            'text-gray-700 hover:bg-gray-100': pathName !== href,
          }
        )}
      >
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link>
  )
}
