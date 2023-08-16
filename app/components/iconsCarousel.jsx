import React, { useEffect } from 'react'
import gsap from 'gsap'
import {
  JavaScriptIcon,
  NodeJsIcon,
  ReactIcon,
  ExpressIcon,
  TailwindCSSIcon,
  NextJsIcon,
  MongoDBIcon,
  PythonIcon,
  DjangoIcon,
  PostgreSQLIcon,
  MySqlIcon,
  AWSIcon,
} from '../../public/icons'

export default function IconsCarousel() {
  const iconComponents = [
    PythonIcon,
    JavaScriptIcon,
    DjangoIcon,
    ReactIcon,
    TailwindCSSIcon,
    NextJsIcon,
    NodeJsIcon,
    ExpressIcon,
    MongoDBIcon,
    PostgreSQLIcon,
    MySqlIcon,
    AWSIcon,
  ]

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      onRepeat: function () {
        gsap.set('.icons-container', { x: 0 })
      },
    })
    tl.to('.icons-container', {
      x: '-119%',
      duration: iconComponents.length * 0.7,
      ease: 'linear',
    })
  }, [iconComponents.length])

  const iconsList = (
    <ul className="flex">
      {iconComponents.map((IconComponent, index) => (
        <li
          className="text-4xl font-bold text-center text-indigo-200 py-5 px-5"
          key={index}
        >
          <IconComponent />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      aria-label="technologies"
      className="relative mb-10 max-w-3xl mx-auto overflow-hidden"
    >
      <div className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-zinc-900 to-transparent"></div>
      <div className="icons-container flex whitespace-nowrap">
        {iconsList}
        {iconsList}
      </div>
      <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-zinc-900 to-transparent"></div>
    </div>
  )
}
