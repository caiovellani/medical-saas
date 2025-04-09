import { ScheduleContent } from '@/app/(public)/clinic/[id]/components/schedule-content'
import { getInfoSchedule } from '@/app/(public)/clinic/[id]/data-access/get-info-schedule'
import { redirect } from 'next/navigation'

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const userId = (await params).id
  const user = await getInfoSchedule({ userId: userId })

  if (!user) {
    redirect('/')
  }

  console.log(user)

  return <ScheduleContent />
}
