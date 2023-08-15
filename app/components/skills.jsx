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

export default function Skills() {
  return (
    <section aria-label="project section">
      <h1 className="text-4xl font-bold text-center text-indigo-200 py-10">
        - Skills -
      </h1>
      <article>
        <h2 className="text-2xl font-bold text-center text-rose-200 py-1">
          Frontend
        </h2>
        <ul className="flex flex-wrap justify-center">
          <li className="text-2xl font-bold text-center text-indigo-200 py-10 px-10">
            HTML
          </li>
          <li className="text-2xl font-bold text-center text-indigo-200 py-10 px-10">
            CSS
          </li>
          <li className="text-2xl font-bold text-center text-indigo-200 py-10 px-10">
            JavaScript <JavaScriptIcon />
          </li>
          <li className="text-2xl font-bold text-center text-indigo-200 py-10 px-10">
            React
          </li>
          <li className="text-2xl font-bold text-center text-indigo-200 py-10 px-10">
            Next.js
          </li>
          <li className="text-2xl font-bold text-center text-indigo-200 py-10 px-10">
            Tailwind CSS
          </li>
          <li className="text-2xl font-bold text-center text-indigo-200 py-10 px-10">
            Bootstrap
          </li>
        </ul>
      </article>
    </section>
  )
}
