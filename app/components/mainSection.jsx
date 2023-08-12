import React from 'react'
import { Image } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon } from '../../public/icons'

export default function MainSection() {
  return (
    <section className="w-full mt-20 flex flew-row justify-center">
      <div className="flex h-full justify-center gap-11 align-middle items-center flex-wrap-reverse">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center text-indigo-50 ">
            Hi, I &apos; m{' '}
            <span className="text-indigo-200 animate-fade-up animate-once animate-duration-1000">
              Diego Ormazábal
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-center text-white">
            <span className="text-indigo-300 animate-pulse ">
              Full Stack Developer
            </span>
          </h2>
          <article className="text-center text-white">
            <p className="text-sm mt-6 max-w-sm text-indigo-50 font-light text-justify">
              Master &apos; s graduate in Psychology transitioning into the
              field of programming. two years since I started my journey as a
              software developer, I have been working with React, Next.js,
              Node.js, Python, MongoDB, and PostgreSQL.
            </p>
            <div className="flex-row flex gap-4 justify-center mt-4 cursor-pointer">
              <a className="text-indigo-100">
                <GithubIcon />
              </a>
              <a className="text-blue-400">
                <LinkedinIcon />
              </a>
            </div>
          </article>
        </div>
        <div className="flex flex-row items-center justify-end">
          <Image
            alt="Self portrait"
            className="object-cover rounded-[150px] opacity-90"
            src="./portrait6.png"
            width={250}
          />
        </div>
      </div>
    </section>
  )
}
