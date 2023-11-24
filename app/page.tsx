import {Header} from '@/components/Header/header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex p-5 min-h-screen flex-col items-center justify-between">
      <Header />
    </main>
  )
}
