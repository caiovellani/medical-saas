import getSession from '@/lib/get-session'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="w-full h-[600px] bg-gray-200 mb-10"></div>
      <div className="w-full h-[600px] bg-gray-200 mb-10"></div>
      <div className="w-full h-[600px] bg-gray-200 mb-10"></div>
      <div className="w-full h-[600px] bg-gray-200 mb-10"></div>
    </div>
  )
}
