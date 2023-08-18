import {
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
  MySQL,
  AWS,
} from '../../public/icons'

export default function IconsList() {
  const iconComponents = [
    Python,
    JavaScript,
    Django,
    ReactIcon,
    TailwindCSS,
    NextJs,
    NodeJs,
    Express,
    MongoDB,
    PostgreSQL,
    MySQL,
    AWS,
  ]

  return (
    <ul className="flex">
      {iconComponents.map((IconComponent, index) => (
        <li className="text-4xl text-center py-5 px-5" key={index}>
          <IconComponent />
        </li>
      ))}
    </ul>
  )
}
