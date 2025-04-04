import { redirect } from 'next/navigation'
import getSession from '@/lib/get-session'
import { ServicesContent } from '@/app/(panel)/dashboard/services/components/service-content'

export default async function Services() {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }
  return (
    <div>
      <ServicesContent userId={session.user?.id!} />
    </div>
  )
}
