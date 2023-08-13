import React from 'react'
import { Image } from '@nextui-org/react'

export default function MainSection() {
  return (
    <section aria-label="presentation content">
      <div className="flex h-full justify-center gap-5 align-middle items-center flex-wrap-reverse">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold text-indigo-50 ">
            Hi, I&apos;m{' '}
            <span className="text-indigo-200 font-extrabold">
              Diego Ormazábal
            </span>
          </h1>
          <h2 className="text-5xl font-bold text-white">
            <span className="text-rose-300">Full Stack Developer</span>
          </h2>
          <article
            aria-label="my description"
            className="text-center text-white"
          >
            <p className="text-sm mt-6 max-w-sm text-indigo-50 text-justify">
              Master&apos;s (c) in Psychology transitioning into the field of
              programming. two years since I started my journey as a software
              developer, I have been working with React, Next.js, Node.js,
              Python, MongoDB and PostgreSQL.
            </p>
          </article>
        </div>
        <div className="flex flex-row items-center justify-end">
          <Image
            alt="Self portrait"
            className="object-cover rounded-[150px] opacity-95"
            src="./portrait6.png"
            width={280}
          />
        </div>
      </div>
    </section>
  )
}
