'use client'

import MainSection from './components/mainSection'
import Nav from './components/navbar'

export default function Home() {
  return (
    <div className="w-full bg-zinc-900 text-zinc-50 p-2 min-h-[calc(100dvh)]">
      <Nav />
      <main className="flex min-h-[calc(50dvh)] flex-row items-center m-auto max-w-5xl">
        <MainSection />
      </main>
    </div>
  )
}
