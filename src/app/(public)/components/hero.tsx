import { Button } from '@/components/ui/button'
import Image from 'next/image'
import doctorImg from '@/../public/doctor-hero.png'

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto pb-4 sm:pb-0 px-4 pt-20 sm:px-6 lg:px8">
        <main className="flex items-center justify-center">
          <article className="space-y-8 flex-[2] max-w-3xl flex flex-col justify-center">
            <h1 className="text-4xl font-bold lg:text-5xl max-w-2xl tracking-tight">
              Encontre os melhores profissionais em um único local!
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl tracking-tight">
              Nós somos uma plataforma para profissionais de saúde com foco em
              agilizar seu atendimento de forma simplificada e organizada.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-400 w-fit px-6 font-semibold">
              Encontre uma clinica
            </Button>
          </article>
          <div className="hidden lg:block">
            <Image
              src={doctorImg}
              alt="Imagem ilustrativa de um profissional de saúde"
              quality={100}
              priority
              width={340}
              height={400}
              className="object-contain"
            />
          </div>
        </main>
      </div>
    </section>
  )
}
