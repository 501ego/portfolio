import React from 'react'
import { Image } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon } from '../../public/icons'

export default function MainSection() {
  return (
    <section aria-label="presentation content">
      <div className="row-center h-full gap-5 align-middle items-center flex-wrap-reverse">
        <div className="col-center text-center">
          <h1 className="text-5xl xxs:text-6xl font-bold ">
            Hi, I&apos;m{' '}
            <span className="text-primaryTitleColor font-extrabold">
              Diego Ormazábal
            </span>
          </h1>
          <h2 className="text-4xl xxs:text-5xl font-bold">
            <span className="text-mainSubColor">Full Stack Developer</span>
          </h2>
          <article aria-label="my description" className="text-center">
            <p className="text-sm mt-6 max-w-md text-justify px-4">
              Master&apos;s (c) in Psychology transitioning into the field of
              Software Engineering. Almost two years since I started my journey
              as a software developer. So far I&apos;ve been working with{' '}
              <span className="font-bold text-primaryTitleColor">
                MERN, Python, Djago and PostgreSQL.
              </span>
            </p>
            <div className="row-center  gap-4 mt-2">
              <a className="hover:text-hover" href="https://github.com/501ego">
                <GithubIcon />
              </a>
              <a className="hover:text-primaryTitleColor">
                <LinkedinIcon />
              </a>
            </div>
          </article>
        </div>
        <div className="row-center mt-1">
          <Image
            alt="Self portrait"
            className="object-cover rounded-[150px] border-2 border-background"
            src="./portrait6.png"
            width={270}
          />
        </div>
      </div>
    </section>
  )
}
