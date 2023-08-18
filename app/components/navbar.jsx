import React from 'react'
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
gsap.registerPlugin(ScrollToPlugin)

export default function Nav() {
  const { theme, setTheme } = useTheme()

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
    >
      <NavbarBrand>
        <div className="text-mainSubColor fixed">
          <p className="row-center text-lg font-semibold">
            <span>
              <ConsoleIcon />
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
          >
            Projects
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            onClick={event => smoothScroll(event, 'skills')}
            href="#skills"
            className="url-hover text-url hover:text-hover"
          >
            Skills
          </a>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            aria-current="page"
            className="url-hover text-url hover:text-hover"
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
          checked={theme === 'light'}
          onChange={e => handleThemeChange(e.target.checked)}
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
