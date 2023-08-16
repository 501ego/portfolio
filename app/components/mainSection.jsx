import React from 'react'
import { Image } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon } from '../../public/icons'

export default function MainSection() {
  return (
    <section aria-label="presentation content">
      <div className="flex h-full justify-center gap-5 align-middle items-center flex-wrap-reverse">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl xxs:text-6xl font-bold ">
            Hi, I&apos;m{' '}
            <span className="text-indigo-300 font-extrabold">
              Diego Ormazábal
            </span>
          </h1>
          <h2 className="text-4xl xxs:text-5xl font-bold">
            <span className="text-rose-300">Full Stack Developer</span>
          </h2>
          <article aria-label="my description" className="text-center">
            <p className="text-sm mt-6 max-w-md text-justify px-4">
              Master&apos;s (c) in Psychology transitioning into the field of
              Software Engineering. Almost two years since I started my journey
              as a software developer. So far I&apos;ve been working with{' '}
              <span className="font-bold text-indigo-200">
                MERN, Python, Djago and PostgreSQL.
              </span>
            </p>
            <div className="flex flex-row justify-center gap-4 mt-2">
              <a
                className="hover:text-indigo-300"
                href="https://github.com/501ego"
              >
                <GithubIcon />
              </a>
              <a className="hover:text-blue-400">
                <LinkedinIcon />
              </a>
            </div>
          </article>
        </div>
        <div className="flex flex-row items-center justify-end mt-1">
          <Image
            alt="Self portrait"
            className="object-cover rounded-[150px]"
            src="./portrait6.png"
            width={270}
          />
        </div>
      </div>
    </section>
  )
}
