import React from 'react'
import { Image } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon } from '../../public/icons'

export default function MainSection() {
  return (
    <section aria-label="Presentation content, including personal introduction and links to social profiles">
      <div className="row-center h-full gap-5 align-middle items-center flex-wrap-reverse">
        <div className="col-center text-center">
          <h1 className="text-5xl xxs:text-6xl font-bold">
            Hi, I&apos;m{' '}
            <span className="text-primaryTitleColor font-extrabold">
              Diego Ormazábal
            </span>
          </h1>
          <h2 className="text-4xl xxs:text-5xl font-bold">
            <span className="text-mainSubColor">Full Stack Developer</span>
          </h2>
          <article
            aria-label="Description of Diego Ormazábal, including professional skills and links to social profiles"
            className="text-center"
          >
            <p className="text-sm mt-6 max-w-md text-justify px-4">
              Master&apos;s (c) in Psychology transitioning into the field of
              Software Engineering. Almost two years since I started my journey
              as a software developer. So far I&apos;ve been working with{' '}
              <span className="font-bold text-primaryTitleColor">
                MERN, Python, Django, and PostgreSQL.
              </span>
            </p>
            <div className="row-center gap-4 mt-2">
              <a
                className="hover:text-hover"
                href="https://github.com/501ego"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github profile"
              >
                <GithubIcon />
              </a>
              <a
                className="hover:text-primaryTitleColor"
                href="https://www.linkedin.com/in/diego-ormazabal-maldonado"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon />
              </a>
            </div>
          </article>
        </div>
        <div className="row-center mt-1">
          <Image
            alt="Portrait of Diego Ormazábal"
            className="object-cover rounded-[150px] border-2 border-background"
            src="./portrait6.webp"
            width={270}
          />
        </div>
      </div>
    </section>
  )
}
