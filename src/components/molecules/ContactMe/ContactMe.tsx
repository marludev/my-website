import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ContactMe = () => {
  return (
    <div className="container px-6 my-10 lg:px-0">
      <div className="flex flex-wrap h-full max-w-6xl p-4 mx-auto text-white bg-opacity-50 shadow-2xl md:p-10 bg-custom-tertiary md:h-96">
        <div className="flex flex-wrap items-center w-full md:w-7/12">
          <div>
            <h2 className="mb-5 text-4xl">¿Algún proyecto en mente?</h2>
            <span className="inline-block w-2/5 h-1 mt-1 mb-3 font-mono bg-custom-primary" />
            <p className="text-lg">
              Ponte en contacto conmigo para materializar tus ideas, podremos
              hablar sobre tu proyecto y la viabilidad del mismo.
            </p>
            <Link href="/contacto">
              <a className="block p-4 my-4 text-lg font-semibold text-black transition-all duration-300 shadow-xl sm:inline-block bg-opacity-90 bg-custom-primary hover:bg-opacity-100">
                ¡Estoy listo para comenzar!
              </a>
            </Link>
          </div>
        </div>
        <div className="relative hidden w-5/12 md:block">
          <Image
            src="/image.jpg"
            objectFit="cover"
            objectPosition="top"
            layout="fill"
            alt="image contact"
          />
        </div>
      </div>
    </div>
  )
}

export { ContactMe }
