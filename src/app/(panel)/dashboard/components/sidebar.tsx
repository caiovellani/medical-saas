'use client'

import { usePathname } from 'next/navigation'
import { useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { List } from 'lucide-react'

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
        <header className="md:hidden">
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
          </Sheet>
        </header>
        <main className="flex-1 py-4 px-2 md:p-6">{children}</main>
      </div>
    </div>
  )
}
