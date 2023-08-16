import { Card, CardBody } from '@nextui-org/react'
import {
  GithubIcon,
  UrlIcon,
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
} from '../../public/icons'
import React from 'react'
import ProjectImage from './projectImage'

export const ProjectCard = ({
  project,
  currentImageIndex,
  nextSlide,
  prevSlide,
}) => {
  const renderIcon = iconName => {
    switch (iconName) {
      case 'JavaScriptIcon':
        return <JavaScriptIcon />
      case 'NodeJsIcon':
        return <NodeJsIcon />
      case 'ReactIcon':
        return <ReactIcon />
      case 'ExpressIcon':
        return <ExpressIcon />
      case 'TailwindCSSIcon':
        return <TailwindCSSIcon />
      case 'NextJsIcon':
        return <NextJsIcon />
      case 'MongoDBIcon':
        return <MongoDBIcon />
      case 'PythonIcon':
        return <PythonIcon />
      case 'DjangoIcon':
        return <DjangoIcon />
      case 'PostgreSQLIcon':
        return <PostgreSQLIcon />
      default:
        return null
    }
  }

  return (
    <div className="rounded-2xl flex justify-center py-7">
      <Card aria-label="project card">
        <CardBody aria-label="card content">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex flex-col items-center p-2">
              <ProjectImage
                key={currentImageIndex}
                image={project.images[currentImageIndex]}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row items-center flex-wrap px-3">
                <h2 className="font-bold text-2xl text-rose-100">
                  {project.name}
                </h2>

                {project.gitHub ? (
                  <>
                    <a
                      className="cursor-pointer ml-1 text-rose-50 hover:text-indigo-300"
                      href={project.gitHub}
                    >
                      <GithubIcon />
                    </a>
                  </>
                ) : null}
                {project.url ? (
                  <>
                    <a
                      className="cursor-pointer ml-1 text-indigo-100 hover:text-indigo-300"
                      href={project.url}
                    >
                      <UrlIcon />
                    </a>
                  </>
                ) : null}
              </div>
              <p className="text-base text-indigo-100 max-w-lg px-3">
                {project.Description}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

ProjectCard.displayName = 'ProjectCard'
