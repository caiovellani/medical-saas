'use client'

import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function DialogService() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Novo serviço</DialogTitle>
        <DialogDescription>Adicione um novo serviço</DialogDescription>
      </DialogHeader>

      <div>
        <h1>Conteúdo do modal</h1>
      </div>
    </>
  )
}
