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

export default function Nav() {
  return (
    <Navbar
      shouldHideOnScroll
      className="px-4 h-[55px] items-center justify-between"
    >
      <NavbarBrand>
        <div className="text-rose-300 fixed">
          <p className="flex flex-row items-center text-lg font-semibold">
            <span>
              <ConsoleIcon />
            </span>
            1EGO
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 py-2">
        <NavbarItem className="hover:text-indigo-300 hover:border-b-2 hover:border-indigo-200">
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-indigo-300 hover:border-b-2 hover:border-indigo-200">
          <Link href="#" aria-current="page">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-indigo-300 hover:border-b-2 hover:border-indigo-200">
          <Link color="foreground" href="#">
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem className="flex-row flex gap-5 justify-center cursor-pointer">
          <Switch
            className="text-indigo-400 cursor-pointer hover:text-yellow-100"
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
