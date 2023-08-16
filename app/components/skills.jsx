export default function Skills() {
  return (
    <section aria-label="skills section" className="max-w-6xl">
      <h1 className="text-4xl font-semibold text-center text-indigo-300 mt-20 mb-2">
        Skills
      </h1>
      <article>
        <div
          aria-label="languages"
          className="mb-10 flex justify-center items-start flex-wrap"
        >
          <ul className="flex flex-wrap max-w-md">
            <li className="text-rose-300 py-5 px-5">
              <h2 className="text-2xl flex justify-center py-2">
                Technical Skills:
              </h2>
              <p className="text-base text-indigo-100 mdc:mb-[24px]">
                Pursuing studies in computer engineering has engaged me in the
                rigorous acquisition and application of various technological
                competencies, particularly in:
              </p>
            </li>
            <li className="text-rose-200 py-5 px-5">
              <span className="text-2xl">Languages:</span>
              <p className="text-base text-indigo-100">
                Programming Accomplished in the MERN stack (MongoDB, Express.js,
                React, Node.js), Python, Django, and PostgreSQL.
              </p>
            </li>
            <li className="text-rose-200 py-5 px-5">
              <span className="text-2xl">Software Development:</span>
              <p className="text-base text-indigo-100">
                Comprehensive understanding of the software development
                lifecycle (SDLC), encompassing design, development, testing, and
                deployment phases.
              </p>
            </li>
            <li className="text-rose-200 py-5 px-5">
              <span className="text-2xl">Problem-Solving: </span>
              <p className="text-base text-indigo-100">
                Highly analytical and logical, skilled in devising efficient and
                resourceful solutions to multifaceted challenges.
              </p>
            </li>
          </ul>
          <ul className="flex flex-wrap max-w-md">
            <li className="text-rose-300 py-5 px-5">
              <h2 className="text-2xl flex justify-center py-2">Soft Skills</h2>
              <p className="text-base text-indigo-100">
                With a Master&apos;s degree in Psychology, my academic
                background has endowed me with distinct insights into the
                nuances of team dynamics, laying a firm foundation in key areas
                such as:
              </p>
            </li>
            <li className="text-rose-200 py-5 px-5">
              <span className="text-2xl">Communication & Writing:</span>
              <p className="text-base text-indigo-100 mdc:mb-[24px]">
                Adept at articulating complex concepts with clarity and
                precision, both in oral and written form.
              </p>
            </li>
            <li className="text-rose-200 py-5 px-5">
              <span className="text-2xl">Research & Analysis:</span>
              <p className="text-base text-indigo-100">
                Research & Analysis: Well-versed in scientific research
                methodologies, exercising critical analysis, and translating
                intricate data into meaningful and actionable insights.
              </p>
            </li>
          </ul>
          <div className="flex flex-col justify-center max-w-4xl">
            <p className="text-base text-indigo-100 p-3">
              My synthesis of these specialized soft and technical skills
              renders me a well-rounded professional, uniquely positioned to
              bridge technological innovation with human-centric approaches.
              This blend of expertise equips me to make meaningful contributions
              to projects that resonate with innovation, impact, and excellence.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
