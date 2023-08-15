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
      <Card aria-label="project card" className="p-1">
        <CardBody aria-label="card content">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex flex-col items-center p-2">
              <h2 className="font-bold text-xl text-rose-100 mb-1">
                {project.name}
              </h2>
              <ProjectImage
                key={currentImageIndex}
                image={project.images[currentImageIndex]}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
              />
              <div className="flex flex-row gap-8 items-center justify-start mt-3">
                {project.gitHub ? (
                  <>
                    <a
                      className="cursor-pointer text-rose-50 hover:text-indigo-300"
                      href={project.gitHub}
                    >
                      <GithubIcon />
                    </a>
                  </>
                ) : null}
                {project.url ? (
                  <>
                    <a
                      className="cursor-pointer text-indigo-100 hover:text-indigo-300"
                      href={project.url}
                    >
                      <UrlIcon />
                    </a>
                  </>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col justify-end p-1">
              <p className="text-base text-indigo-50 max-w-md px-3">
                {project.Description}
              </p>
              <div className="flex flex-row justify-center gap-4 mt-2 text-2xl">
                {project.icons ? (
                  <>
                    {project.icons.map((icon, index) => (
                      <React.Fragment key={index}>
                        {renderIcon(icon)}
                      </React.Fragment>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

ProjectCard.displayName = 'ProjectCard'
