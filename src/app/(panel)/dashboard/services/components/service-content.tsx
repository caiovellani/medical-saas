import { ServicesList } from '@/app/(panel)/dashboard/services/components/services-list'
import { getAllServices } from '@/app/(panel)/dashboard/services/data-access/get-all-services'

interface ServicesContentProps {
  userId: string
}

export async function ServicesContent({ userId }: ServicesContentProps) {
  const services = await getAllServices({ userId: userId })

  return <ServicesList />
}
