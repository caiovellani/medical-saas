'use client'
import { useProfileForm } from '@/app/(panel)/dashboard/profile/components/profile-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
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

export function ProfileContent() {
  const form = useProfileForm()
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
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </form>
      </Form>
    </div>
  )
}
