import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
} from '@nextui-org/react'
import { GithubIcon, LinkedinIcon } from '../../public/icons'
import { MoonIcon, SunIcon, LaptopIcon } from '../../public/icons'

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll className="px-4 items-center justify-between">
      <NavbarBrand>
        <div className="font-bold text-inherit text-rose-300 fixed text-lg">
          <p className="flex flex-row gap-1">
            <LaptopIcon /> DIEGO
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 py-2">
        <NavbarItem className="hover:text-indigo-300">
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-indigo-300">
          <Link href="#" aria-current="page">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-indigo-300">
          <Link color="foreground" href="#">
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem className="flex-row flex gap-5 justify-center mt-4 cursor-pointer">
          <a>
            <GithubIcon />
          </a>
          <a className="text-blue-400">
            <LinkedinIcon />
          </a>
          <Switch
            className="text-indigo-200 cursor-pointer"
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          ></Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
