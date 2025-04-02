'use client'
import { useProfileForm } from '@/app/(panel)/dashboard/profile/components/profile-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Label } from '@/components/ui/label'
import Image from 'next/image'
import imgTest from '@/../public/foto1.png'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function ProfileContent() {
  const [selectedHours, setSelectedHours] = useState<string[]>([])

  const form = useProfileForm()

  function generateTimeSlots(): string[] {
    const hours: string[] = []

    for (let i = 8; i <= 24; i++) {
      for (let j = 0; j < 2; j++) {
        const hour = i.toString().padStart(2, '0')
        const minute = (j * 30).toString().padStart(2, '0')

        hours.push(`${hour}:${minute}`)
      }
    }

    return hours
  }

  const hours = generateTimeSlots()

  function toggleHour(hour: string) {
    setSelectedHours((prev) =>
      prev.includes(hour)
        ? prev.filter((h) => h !== hour)
        : [...prev, hour].sort()
    )
  }

  return (
    <div className="mx-auto">
      <Form {...form}>
        <form>
          <Card>
            <CardHeader>
              <CardTitle>Meu Perfil</CardTitle>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="relative h-40 w-40 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={imgTest}
                      alt="Imagem Teste"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Digite o nome da clínica..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">
                          Endereço completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Digite o endereço da clínica..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">
                          Telefone
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Digite o telefone da clínica..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">
                          Status da clínica
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value ? 'active' : 'inactive'}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o status da clínica" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">
                                Ativo (clínica aberta)
                              </SelectItem>
                              <SelectItem value="inactive">
                                Inativo (clínica fechada)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <Label className="font-semibold">
                      Configurar horários da clínica
                    </Label>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between"
                        >
                          Clique aqui para selecionar horários
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Horários da clínica</DialogTitle>
                          <DialogDescription>
                            Selecione abaixo os horários de funcionamento da
                            clínica:
                          </DialogDescription>
                        </DialogHeader>

                        <section className="py-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            Clique nos horários abaixo para marcar ou desmarcar:
                          </p>

                          <div className="grid grid-cols-5 gap-2">
                            {hours.map((hour) => (
                              <Button
                                key={hour}
                                variant="outline"
                                className={cn(
                                  'h-10',
                                  selectedHours.includes(hour) &&
                                    'border-emerald-500 text-primary'
                                )}
                                onClick={() => toggleHour(hour)}
                              >
                                {hour}
                              </Button>
                            ))}
                          </div>
                        </section>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </form>
      </Form>
    </div>
  )
}
