import React, { useState } from 'react'
import { ProjectCard } from './projectCard'
import projectsData from '../data/projects.json'

export default function Projects() {
  const projects = projectsData.projects

  const [currentImageIndex, setCurrentImageIndex] = useState(
    new Array(projects.length).fill(0)
  )

  const nextSlide = idx => {
    setCurrentImageIndex(prevIndices =>
      prevIndices.map((index, i) =>
        i === idx ? (index + 1) % projects[i].images.length : index
      )
    )
  }

  const prevSlide = idx => {
    setCurrentImageIndex(prevIndices =>
      prevIndices.map((index, i) =>
        i === idx
          ? (index - 1 + projects[i].images.length) % projects[i].images.length
          : index
      )
    )
  }

  return (
    <section aria-label="project section">
      <h1 className="text-4xl font-semibold text-center text-indigo-300 mt-20 mb-2">
        Projects
      </h1>
      <article className="flex justify-center gap-6 flex-wrap">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            currentImageIndex={currentImageIndex[idx]}
            nextSlide={() => nextSlide(idx)}
            prevSlide={() => prevSlide(idx)}
          />
        ))}
      </article>
    </section>
  )
}
