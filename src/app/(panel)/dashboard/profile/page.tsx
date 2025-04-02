import { ProfileContent } from '@/app/(panel)/dashboard/profile/components/profile'
import { getUserData } from '@/app/(panel)/dashboard/profile/data-access/get-info-user'
import getSession from '@/lib/get-session'
import { redirect } from 'next/navigation'

export default async function Profile() {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }

  const user = await getUserData({ userId: session.user?.id })
  console.log('getUserData: ', user)

  if (!user) {
    redirect('/')
  }

  return (
    <section>
      <ProfileContent />
    </section>
  )
}
