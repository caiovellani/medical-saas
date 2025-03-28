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
import {
  Banknote,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Folder,
  List,
  Settings,
} from 'lucide-react'
import { SidebarLink } from '@/app/(panel)/dashboard/components/sidebar-links'
import Image from 'next/image'
import logoOdonto from '@/../public/logo-odonto.png'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'

export function SidebarDashboard({ children }: { children: ReactNode }) {
  const pathName = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={clsx(
          'flex flex-col border-r bg-background transition-all duration-300 p-4 h-full',
          {
            'w-20': isCollapsed,
            'w-64': !isCollapsed,
            'hidden md:flex md:fixed': true,
          }
        )}
      >
        <div className="mb-6 mt-4">
          {!isCollapsed && (
            <Image
              src={logoOdonto}
              alt="Logo OdontoPRO"
              priority
              quality={100}
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          )}
        </div>

        <Button
          className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {!isCollapsed ? (
            <ChevronLeft className="w-12 h-12" />
          ) : (
            <ChevronRight className="h-12 w-12" />
          )}
        </Button>

        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-1 overflow-hidden">
              <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                Dashboard
              </span>
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

              <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                Configurações
              </span>
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
          </CollapsibleContent>
        </Collapsible>
      </aside>

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

                <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                  Configurações
                </span>
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
