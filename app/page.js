'use client'

import MainSection from './components/mainSection'
import Nav from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import IconsCarousel from './components/iconsCarousel'
import { useState } from 'react'

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <div className="w-full min-h-screen overflow-x-hidden scroll-smooth">
      <Nav setIsEnglish={setIsEnglish} />
      <main
        aria-label="main content"
        className="flex items-center m-auto max-w-full background-svg"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center min-h-[680px] w-full">
            <MainSection />
          </div>
          <div
            id="projects"
            className="flex flex-row justify-center min-h-[680px] w-full px-3"
          >
            <Projects />
          </div>
          <div
            id="skills"
            className="flex flex-row justify-center min-h-[680px] w-full"
          >
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
