import { Header } from '@/app/(public)/components/header'
import { Hero } from '@/app/(public)/components/hero'
import { Professionals } from '@/app/(public)/components/professionals'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div>
        <Hero />

        <Professionals />
      </div>
    </div>
  )
}
