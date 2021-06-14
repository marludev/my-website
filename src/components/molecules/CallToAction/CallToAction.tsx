import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className="px-6 my-10 lg:px-0">
      <div className="flex flex-wrap h-full mx-auto overflow-hidden text-white bg-opacity-50 rounded-lg shadow-2xl xl:rounded-none xl:h-96">
        <div className="relative hidden md:w-1/2 md:block">
          <Image
            src="/image.jpg"
            objectFit="cover"
            objectPosition="top"
            layout="fill"
            alt="image contact"
          />
        </div>
        <div className="flex flex-wrap items-center w-full p-10 md:w-1/2 bg-custom-tertiary">
          <div className="max-w-xl">
            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              ¿Algún proyecto en mente?
            </h2>
            <span className="inline-block w-2/5 h-1 mt-1 mb-3 rounded-lg bg-custom-primary" />
            <p className="mb-4 text-lg text-gray-300">
              Ponte en contacto conmigo para materializar tus ideas, podremos
              hablar sobre tu proyecto y la viabilidad del mismo.
            </p>
            <Link href="/contacto">
              <a className="block p-4 my-4 text-base font-semibold text-black transition-all duration-300 rounded-lg shadow-xl sm:text-lg sm:inline-block bg-opacity-90 bg-custom-primary hover:bg-opacity-100">
                ¡Estoy listo para comenzar!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CallToAction }
