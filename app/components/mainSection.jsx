import React from 'react'
import { Image } from '@nextui-org/react'

export default function MainSection() {
  return (
    <section aria-label="presentation content">
      <div className="flex h-full justify-center gap-5 align-middle items-center flex-wrap-reverse">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl xxs:text-6xl font-bold ">
            Hi, I&apos;m{' '}
            <span className="text-indigo-200 font-extrabold">
              Diego Ormazábal
            </span>
          </h1>
          <h2 className="text-4xl xxs:text-5xl font-bold">
            <span className="text-rose-300">Full Stack Developer</span>
          </h2>
          <article aria-label="my description" className="text-center">
            <p className="text-sm mt-6 max-w-md text-justify px-4">
              Master&apos;s (c) in Psychology transitioning into the field of
              programming. Almost two years since I started my journey as a
              software developer. So far I have been working with React,
              Next.js, Node.js, Python, MongoDB and PostgreSQL.
            </p>
          </article>
        </div>
        <div className="flex flex-row items-center justify-end mt-1">
          <Image
            alt="Self portrait"
            className="object-cover rounded-[150px]"
            src="./portrait6.png"
            width={275}
          />
        </div>
      </div>
    </section>
  )
}
