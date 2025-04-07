'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pencil, Plus, X } from 'lucide-react'
import { DialogService } from '@/app/(panel)/dashboard/services/components/dialog-service'
import type { Service } from '@prisma/client'
import { formatCurrency } from '@/utils/format-currency'
import { deleteService } from '@/app/(panel)/dashboard/services/actions/delete-service'
import { toast } from 'sonner'

interface ServiceListProps {
  services: Service[]
}

export function ServicesList({ services }: ServiceListProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState<null | Service>(null)

  async function handleDeleteService(serviceId: string) {
    const response = await deleteService({ serviceId: serviceId })

    if (response.err) {
      toast(response.err)
      return
    }

    toast.success(response.data)
  }

  function handleEditService(service: Service) {
    setEditingService(service)
    setIsDialogOpen(true)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <section className="mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl md:text-2xl font-bold">
              Serviços
            </CardTitle>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent
              onInteractOutside={(e) => {
                e.preventDefault()
                setIsDialogOpen(false)
                setEditingService(null)
              }}
            >
              <DialogService
                closeModal={() => {
                  setIsDialogOpen(false)
                  setEditingService(null)
                }}
                serviceId={editingService ? editingService.id : undefined}
                initialValues={
                  editingService
                    ? {
                        name: editingService.name,
                        price: (editingService.price / 100)
                          .toFixed(2)
                          .replace('.', ','),
                        hours: Math.floor(
                          editingService.duration / 60
                        ).toString(),
                        minutes: (editingService.duration % 60).toString(),
                      }
                    : undefined
                }
              />
            </DialogContent>
          </CardHeader>
          <CardContent>
            <section className="space-y-4 mt-5">
              {services.map((service) => (
                <article
                  className="flex items-center justify-between"
                  key={service.id}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{service.name}</span>
                    <span className="text-gray-500">-</span>
                    <span className="text-gray-600">
                      {formatCurrency(service.price / 100)}
                    </span>
                  </div>

                  <div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditService(service)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </section>
          </CardContent>
        </Card>
      </section>
    </Dialog>
  )
}
