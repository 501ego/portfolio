import { Card, CardBody, Image } from '@nextui-org/react'
import { GithubIcon, UrlIcon } from '../../public/icons'
import React from 'react'

const ProjectImage = React.memo(({ image }) => (
  <Image
    alt="Project Screenshot"
    src={image}
    width={300}
    className="h-[240px]"
  />
))

ProjectImage.displayName = 'ProjectImage'

export const ProjectCard = React.memo(({ project, currentImageIndex }) => (
  <div className="bg-zinc-900 rounded-lg ">
    <div className="rounded-2xl flex justify-center">
      <Card
        aria-label="projects cards"
        className="py-4 p-1 max-h-[500px] border border-indigo-200 rounded-xl"
      >
        <CardBody className="overflow-hidden">
          <div className="flex flex-row flex-wrap justify-center gap-4 overflow-auto">
            <div className="flex flex-col items-center p-2">
              <h2 className="font-bold text-xl text-rose-100">
                {project.name}
              </h2>
              <ProjectImage
                key={currentImageIndex}
                image={project.images[currentImageIndex]}
              />
              <div className="flex flex-row gap-8 items-center justify-center mt-3">
                <a className="cursor-pointer" href={project.gitHub}>
                  <GithubIcon className="text-rose-100" />
                </a>
                <a className="cursor-pointer" href={project.url}>
                  <UrlIcon className="text-indigo-300" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-indigo-50 max-w-sm">{project.Description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  </div>
))

ProjectCard.displayName = 'ProjectCard'
