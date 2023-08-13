import React, { useEffect, useState, useMemo } from 'react'
import { ProjectCard } from './projectCard'

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        name: 'Libgen Project',
        images: [
          './projects/libgenss.png',
          './projects/libgenss2.png',
          './projects/libgenss3.png',
        ],
        url: 'https://ddaudalagid5012.netlify.app/',
        gitHub: 'https://github.com/501ego/libgen',
        Description:
          'This project is a web application that combines the LibGen and Google Books APIs to provide a unique and comprehensive book search service. Users can search for books by title, author, or category and get a list of results that include detailed book information, including a link to download the book via LibGen. The integration of these two APIs enables access to an extensive collection of literary resources, ranging from contemporary works to timeless classics. Whether looking for academic materials, novels, or specialized texts, users will find this platform invaluable for its ease of use and accessibility.',
      },
      {
        name: 'Recipe generator',
        images: [
          './projects/recipess.png',
          './projects/recipess2.png',
          './projects/recipess3.png',
        ],
        url: 'https://recipes-generator-ten.vercel.app/',
        gitHub: 'https://github.com/501ego/recipes-generator',
        Description:
          'Web application project using Next.js to create vegan recipes. It was made using React, Next.js, and TailwindCSS, forming a streamlined and visually appealing interface. Deployed through Vercel SDK, it leverages modern hosting and continuous integration tools to ensure robust performance. The application integrates with a MongoDB database, allowing for flexible data management and real-time updates to the recipe collection. This project served as a proof of concept demonstrating the feasibility and efficiency of using these technologies together.',
      },
    ],
    []
  )

  const [currentImageIndex, setCurrentImageIndex] = useState(
    new Array(projects.length).fill(0)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev.map(index => (index + 1) % 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section aria-label="project section">
      <h1 className="text-4xl font-bold text-center text-indigo-200 py-7">
        Projects
      </h1>
      <article className="flex justify-center gap-6 flex-wrap">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            currentImageIndex={currentImageIndex[idx]}
          />
        ))}
      </article>
    </section>
  )
}
