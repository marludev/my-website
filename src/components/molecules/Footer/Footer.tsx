import React from 'react'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import NextLink from 'next/link'
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <NextLink href="/">
          <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <span className="ml-3 text-xl text-gray-200">Marludev</span>
          </a>
        </NextLink>
        <p className="flex flex-col mt-4 text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-custom-primary sm:py-2 sm:mt-0">
          © {new Date().getFullYear()} Marludev — Todos los derechos reservados
          <span>
            Diseñado por
            <a
              href="https://www.instagram.com/christ_inventiva/"
              className="ml-1 text-white hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              @christ_inventiva
            </a>
          </span>
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://www.instagram.com/marludev/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-400"
            title="instagram"
          >
            <IoLogoInstagram
              size="30"
              className="transition duration-300 hover:text-pink-500"
            />
          </a>
          <a
            href="https://twitter.com/marludev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-400"
            title="twitter"
          >
            <IoLogoTwitter
              size="30"
              className="transition duration-300 hover:text-blue-400"
            />
          </a>
        </span>
      </div>
    </footer>
  )
}

export { Footer }
