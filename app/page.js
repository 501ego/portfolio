'use client'

import MainSection from './components/mainSection'
import Nav from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import IconsCarousel from './components/iconsCarousel'

export default function Home() {
  return (
    <div className="w-full bg-zinc-900 text-zinc-50 min-h-screen overflow-x-hidden">
      <Nav />
      <main
        aria-label="main content"
        className="flex items-center m-auto max-w-full"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center min-h-[680px] background-svg w-full">
            <MainSection />
          </div>
          <div className="flex flex-row justify-center min-h-[680px] w-full">
            <Projects />
          </div>
          <div className="flex flex-row justify-center min-h-[680px] w-full">
            <Skills />
          </div>
          <div className="flex flex-row justify-center w-full">
            <IconsCarousel />
          </div>
        </div>
      </main>
    </div>
  )
}
