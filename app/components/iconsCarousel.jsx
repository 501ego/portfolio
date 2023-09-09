import React, { useEffect } from 'react'
import gsap from 'gsap'
import IconsList from './iconsList'

export default function IconsCarousel() {
  const iconComponentsLength = 12
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      onRepeat: function () {
        gsap.set('.icons-container', { x: 0 })
      },
    })
    tl.to('.icons-container', {
      x: '-119%',
      duration: iconComponentsLength * 0.7,
      ease: 'linear',
    })
  }, [iconComponentsLength])

  return (
    <section
      aria-label="Carousel displaying various technologies I've worked with"
      className="relative mb-10 max-w-3xl mx-auto overflow-hidden"
    >
      <div className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-background to-transparent"></div>
      <article className="icons-container flex whitespace-nowrap">
        <IconsList />
        <IconsList />
      </article>
      <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-background to-transparent"></div>
    </section>
  )
}
