'use client'

import MainSection from './components/mainSection'
import Nav from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import IconsCarousel from './components/iconsCarousel'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden scroll-smooth">
      <Nav />
      <section
        aria-label="main content"
        className="flex items-center m-auto max-w-full background-svg"
      >
        <article className="flex flex-col justify-center items-center w-full">
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
        </article>
      </section>
      <Footer />
    </main>
  )
}
