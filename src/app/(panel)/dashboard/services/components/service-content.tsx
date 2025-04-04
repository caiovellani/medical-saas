import { getAllServices } from '@/app/(panel)/dashboard/services/data-access/get-all-services'

interface ServicesContentProps {
  userId: string
}

export async function ServicesContent({ userId }: ServicesContentProps) {
  const services = await getAllServices({ userId: userId })

  return <div>Todos os meus serviços</div>
}
