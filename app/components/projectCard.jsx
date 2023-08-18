import { Link, Chip } from '@nextui-org/react'
import {
  GithubIcon,
  UrlIcon,
  JavaScript,
  NodeJs,
  ReactIcon,
  Express,
  TailwindCSS,
  NextJs,
  MongoDB,
  Python,
  Django,
  PostgreSQL,
} from '../../public/icons'
import React from 'react'
import ProjectImage from './projectImage'

export const ProjectCard = ({
  project,
  currentImageIndex,
  nextSlide,
  prevSlide,
}) => {
  const iconComponents = {
    NodeJs: NodeJs,
    JavaScript: JavaScript,
    React: ReactIcon,
    Express: Express,
    TailwindCSS: TailwindCSS,
    NextJs: NextJs,
    MongoDB: MongoDB,
    Python: Python,
    Django: Django,
    PostgreSQL: PostgreSQL,
  }

  return (
    <article className="col-center py-7" aria-label="Project information">
      <div aria-label="project card">
        <div aria-label="card content">
          <div className="row-center flex-wrap">
            <div className="flex flex-col items-center p-2">
              <ProjectImage
                key={currentImageIndex}
                image={project.images[currentImageIndex]}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                alt={project.name}
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="row-center px-3 flex-wrap">
                <h2 className="font-bold text-2xl text-titleColor">
                  {project.name}
                </h2>
                {project.gitHub ? (
                  <>
                    <Link
                      aria-label="GitHub repository link"
                      className="cursor-pointer ml-3 text-textPrimary hover:text-mainSubColor"
                      href={project.gitHub}
                    >
                      <Chip
                        startContent={<GithubIcon />}
                        variant="flat"
                        className="bg-chip text-textPrimary hover:text-mainSubColor"
                        size="sm"
                      >
                        Github
                      </Chip>
                    </Link>
                  </>
                ) : null}
                {project.url ? (
                  <>
                    <Link
                      aria-label="Project URL"
                      className="cursor-pointer ml-1 text-textPrimary hover:text-mainSubColor"
                      href={project.url}
                    >
                      <Chip
                        startContent={<UrlIcon />}
                        variant="flat"
                        className="bg-chip text-textPrimary hover:text-mainSubColor"
                        size="sm"
                      >
                        URL
                      </Chip>
                    </Link>
                  </>
                ) : null}
              </div>
              <p className="text-base text-Primary max-w-lg px-3">
                {project.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row-center gap-1 mt-1 flex-wrap">
        {project.icons.map((iconName, index) => (
          <Chip
            variant="flat"
            startContent={React.createElement(iconComponents[iconName])}
            size="sm"
            key={index}
            className="bg-chip text-textPrimary"
          >
            {iconName}
          </Chip>
        ))}
      </div>
    </article>
  )
}

ProjectCard.displayName = 'ProjectCard'
