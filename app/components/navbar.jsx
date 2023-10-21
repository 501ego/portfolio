import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
} from '@nextui-org/react'
import { MoonIcon, SunIcon, ConsoleIcon } from '../../public/icons'
import { useTheme } from 'next-themes'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useState, useEffect } from 'react'

gsap.registerPlugin(ScrollToPlugin)
export default function Nav() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const handleThemeChange = isSelected => {
    setTheme(isSelected ? 'light' : 'dark')
  }

  const smoothScroll = (event, id) => {
    event.preventDefault()
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred
      maxWidth="full"
      className="bg-zinc-900"
      role="navigation"
      aria-label="Main Navigation"
    >
      <NavbarBrand>
        <div className="text-mainSubColor fixed">
          <p className="row-center text-lg font-semibold">
            <span>
              <ConsoleIcon aria-hidden="true" />
            </span>
            1EGO
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 py-2">
        <NavbarItem>
          <a
            onClick={event => smoothScroll(event, 'projects')}
            href="#projects"
            className="url-hover text-url hover:text-hover"
            aria-label="Navigate to Projects"
          >
            Projects
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            onClick={event => smoothScroll(event, 'skills')}
            href="#skills"
            className="url-hover text-url hover:text-hover"
            aria-label="Navigate to Skills"
          >
            Skills
          </a>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="./resume/Diego-CV.pdf"
            aria-current="page"
            className="url-hover text-url hover:text-hover"
            aria-label="Download Resume"
          >
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem>
        <Switch
          className="px-11"
          size="lg"
          color="primary"
          checked={theme === 'dark'}
          onChange={e => handleThemeChange(e.target.checked)}
          aria-label="Toggle Theme"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        ></Switch>
      </NavbarItem>
    </Navbar>
  )
}
