import { NavLink } from '@/components/atoms'
import { routes } from '@/data'
import { document } from 'browser-monads-ts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import noPaddingComplete from '/public/noPaddingComplete.png'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  React.useMemo(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <nav className="py-4 overflow-hidden bg-custom-secondary/90 lg:backdrop-blur-md">
      <ul className="container flex items-center justify-between">
        <Link href="/">
          <a className="px-6 lg:p-0">
            <figure className="flex items-center justify-center w-32 lg:w-56">
              <Image src={noPaddingComplete} objectFit="contain" alt="Logo" />
            </figure>
          </a>
        </Link>
        <div className="flex-row justify-end hidden lg:flex">
          {routes.map(route => (
            <li className="mx-4" key={route.url}>
              <NavLink
                className="px-4 pb-2 text-lg transition duration-300 border-b-2 hover:border-custom-primary"
                activateClassName="border-custom-primary"
                href={route.url}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </div>
      </ul>

      <ul
        className={`fixed inset-y-0 right-0 z-20 w-full max-w-xs p-6 sm:max-w-md backdrop-blur-md	bg-custom-secondary/90  lg:hidden transform transition-all duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {routes.map(route => (
          <li className="mx-4 my-8" key={route.url}>
            <NavLink
              className="block pb-1 text-2xl transition duration-300 border-b-2 hover:border-custom-primary focus:border-custom-primary"
              activateClassName="border-custom-primary"
              href={route.url}
              onClick={() => setOpen(!open)}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`fixed z-50 rounded-full shadow-2xl w-14 h-14 bottom-10 right-10 bg-custom-primary focus:outline-none lg:hidden transform transition-all duration-500 ${
          open ? 'rotate-180' : '-rotate-180'
        }`}
        aria-label="Open/Close Menu"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <AiOutlineClose size="30" className="mx-auto text-custom-secondary" />
        ) : (
          <FaBars size="20" className="mx-auto text-custom-secondary" />
        )}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-10 bg-black opacity-25"
        />
      )}
    </nav>
  )
}

export { Navbar }
