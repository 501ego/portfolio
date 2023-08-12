import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
} from '@nextui-org/react'

import { MoonIcon, SunIcon } from '../../public/icons'

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll className="px-4 items-center justify-between">
      <NavbarBrand>
        <p className="font-bold text-inherit text-rose-300 fixed text-lg">
          PORTFOLIO
        </p>
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
        <NavbarItem>
          <Switch
            className="text-indigo-200 cursor-pointer text-xl"
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
