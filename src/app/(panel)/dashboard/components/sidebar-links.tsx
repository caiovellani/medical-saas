import clsx from 'clsx'
import Link from 'next/link'

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  pathName: string
  isCollapsed: boolean
}

export function SidebarLink({
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
