'use client'

import { createNewService } from '@/app/(panel)/dashboard/services/actions/create-service'
import { updateService } from '@/app/(panel)/dashboard/services/actions/update-service'
import {
  useDialogServiceForm,
  type DialogServiceFormData,
} from '@/app/(panel)/dashboard/services/components/dialog-service-form'
import { Button } from '@/components/ui/button'
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { convertRealToCents } from '@/utils/convert-currency'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface DialogServiceProps {
  closeModal: () => void
  serviceId?: string
  initialValues?: {
    name: string
    price: string
    hours: string
    minutes: string
  }
}

export function DialogService({
  closeModal,
  initialValues,
  serviceId,
}: DialogServiceProps) {
  const [loading, setLoading] = useState(false)

  const form = useDialogServiceForm({ initialValues: initialValues })
  const router = useRouter()

  async function onSubmit(values: DialogServiceFormData) {
    setLoading(true)
    const priceInCents = convertRealToCents(values.price)
    const hours = parseInt(values.hours) || 0
    const minutes = parseInt(values.minutes) || 0

    const duration = hours * 60 + minutes

    if (serviceId) {
      await editServiceById({
        serviceId: serviceId,
        name: values.name,
        priceInCents: priceInCents,
        duration: duration,
      })

      return
    }

    const response = await createNewService({
      name: values.name,
      price: priceInCents,
      duration: duration,
    })

    setLoading(false)

    if (response.err) {
      toast.error(response.err)
      return
    }
    toast.success('Serviço cadastrado com sucesso!')
    handleCloseModal()
    router.refresh()
  }

  async function editServiceById({
    serviceId,
    name,
    priceInCents,
    duration,
  }: {
    serviceId: string
    name: string
    priceInCents: number
    duration: number
  }) {
    const response = await updateService({
      serviceId: serviceId,
      name: name,
      price: priceInCents,
      duration: duration,
    })

    setLoading(false)

    if (response.err) {
      toast.error(response.err)
      return
    }

    toast.success(response.data)
    handleCloseModal()
  }

  function handleCloseModal() {
    form.reset()
    closeModal()
  }

  function changeCurrency(event: React.ChangeEvent<HTMLInputElement>) {
    let { value } = event.target
    value = value.replace(/\D/g, '')

    if (value) {
      value = (parseInt(value, 10) / 100).toFixed(2)
      value = value.replace('.', ',')
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    event.target.value = value
    form.setValue('price', value)
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Novo serviço</DialogTitle>
        <DialogDescription>Adicione um novo serviço</DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Nome do Serviço:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite o nome do serviço..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Valor do Serviço:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Ex: 120,00"
                      onChange={changeCurrency}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <p className="font-semibold">Tempo de duração do serviço:</p>
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Horas:</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1" min="0" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minutes"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Minutos:</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="0" min="0" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="w-full font-semibold text-white"
            type="submit"
            disabled={loading}
          >
            {loading
              ? 'Carregando'
              : `${serviceId ? 'Atualizar serviço' : 'Cadastrar serviço'}`}
          </Button>
        </form>
      </Form>
    </>
  )
}
