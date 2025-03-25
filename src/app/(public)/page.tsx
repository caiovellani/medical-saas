import { Header } from '@/app/(public)/components/header'
import { Hero } from '@/app/(public)/components/hero'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div>
        <Hero />
      </div>
    </div>
  )
}
