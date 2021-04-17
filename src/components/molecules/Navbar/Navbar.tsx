import * as React from 'react'
import { NavLink } from '@/components/atoms'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)
  const router = useRouter()

  let isAbsolute = null
  const path = router.pathname

  if (path === '/') isAbsolute = true
  else if (path === '/blog') {
    const getPathBlog = path.split('/')
    if (getPathBlog.length >= 3) isAbsolute = true
  }

  return (
    <nav
      className={`z-50 overflow-hidden lg:p-8 ${
        isAbsolute ? 'absolute inset-x-0' : 'relative'
      }`}
    >
      <ul className="container flex-row justify-end hidden lg:flex">
        <li className="mx-4">
          <NavLink
            className="px-4 pb-2 text-lg transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
            activateClassName="border-b-2 border-custom-primary"
            href="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink
            className="px-4 pb-2 text-lg transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
            activateClassName="border-b-2 border-custom-primary"
            href="/sobre-mi"
          >
            Sobre mi
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink
            className="px-4 pb-2 text-lg transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
            activateClassName="border-b-2 border-custom-primary"
            href="/portafolio"
          >
            Portafolio
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink
            className="px-4 pb-2 text-lg transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
            activateClassName="border-b-2 border-custom-primary"
            href="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink
            className="px-4 pb-2 text-lg transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
            activateClassName="border-b-2 border-custom-primary"
            href="/contacto"
          >
            Contacto
          </NavLink>
        </li>
      </ul>

      {toggle && (
        <ul className="fixed inset-y-0 right-0 z-20 w-full max-w-xs p-6 sm:max-w-md bg-custom-secondary lg:hidden">
          <li className="mx-4 my-8">
            <NavLink
              className="pb-1 text-2xl transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
              activateClassName="border-b-2 border-custom-primary"
              href="/"
              onClick={() => setToggle(false)}
            >
              Inicio
            </NavLink>
          </li>
          <li className="mx-4 my-8">
            <NavLink
              className="pb-1 text-2xl transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
              activateClassName="border-b-2 border-custom-primary"
              href="/sobre-mi"
              onClick={() => setToggle(false)}
            >
              Sobre mi
            </NavLink>
          </li>
          <li className="mx-4 my-8">
            <NavLink
              className="pb-1 text-2xl transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
              activateClassName="border-b-2 border-custom-primary"
              href="/portafolio"
              onClick={() => setToggle(false)}
            >
              Portafolio
            </NavLink>
          </li>
          <li className="mx-4 my-8">
            <NavLink
              className="pb-1 text-2xl transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
              activateClassName="border-b-2 border-custom-primary"
              href="/blog"
              onClick={() => setToggle(false)}
            >
              Blog
            </NavLink>
          </li>
          <li className="mx-4 my-8">
            <NavLink
              className="pb-1 text-2xl transition duration-300 border-b-2 border-transparent hover:border-custom-primary"
              activateClassName="border-b-2 border-custom-primary"
              href="/contacto"
              onClick={() => setToggle(false)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      )}

      <button
        type="button"
        className="fixed z-50 rounded-full shadow-2xl w-14 h-14 bottom-10 right-10 bg-custom-primary focus:outline-none lg:hidden"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <AiOutlineClose size="30" className="mx-auto" />
        ) : (
          <FaBars size="20" className="mx-auto" />
        )}
      </button>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 z-10 bg-black opacity-25"
        />
      )}
    </nav>
  )
}

export { Navbar }