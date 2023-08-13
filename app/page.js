'use client'

import MainSection from './components/mainSection'
import Nav from './components/navbar'
import Projects from './components/projects'

export default function Home() {
  return (
    <div className="w-full bg-zinc-900 text-zinc-50 p-2 min-h-[calc(100dvh)]">
      <Nav />
      <main
        aria-label="main content"
        className="flex items-center m-auto max-w-5xl"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center min-h-[620px]">
            <MainSection />
          </div>
          <div className="flex flex-row justify-center min-h-[620px] w-[calc(100dvw)]">
            <Projects />
          </div>
        </div>
      </main>
    </div>
  )
}
