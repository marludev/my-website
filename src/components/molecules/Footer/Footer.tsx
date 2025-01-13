import Image from 'next/image'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'
import noPaddingComplete from '/public/noPaddingComplete.png'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <Link href="/">
          <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <span className="ml-3">
              <figure className="w-40">
                <Image src={noPaddingComplete} objectFit="contain" alt="Logo" />
              </figure>
            </span>
          </a>
        </Link>
        <p className="flex flex-col mt-4 text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-custom-primary sm:py-2 sm:mt-0">
          © {new Date().getFullYear()} Marludev — Todos los derechos reservados
          <span>
            Diseñado por
            <a
              href="https://www.instagram.com/christ_ui_/"
              className="ml-1 text-white hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              @christ_ui_
            </a>
          </span>
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://www.linkedin.com/in/marludev/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-400"
            title="linkedin"
          >
            <IoLogoLinkedin
              size="30"
              className="transition duration-300 hover:text-blue-600"
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
          <a
            href="https://github.com/marludev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-400"
            title="github"
          >
            <IoLogoGithub
              size="30"
              className="transition duration-300 hover:text-gray-600"
            />
          </a>
        </span>
      </div>
    </footer>
  )
}

export { Footer }
