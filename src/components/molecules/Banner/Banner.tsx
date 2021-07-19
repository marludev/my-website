import React from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Image from 'next/image'
import { NavLink } from '@/components/atoms'
import { summaryAboutMe } from '@/data'
import banner from '/public/header.jpg'
import me from '/public/me.png'

const Banner: React.FC = () => {
  return (
    <div className="relative flex items-center py-10 lg:py-40">
      <figure className="absolute top-0 left-0 w-full h-full">
        <Image
          src={banner}
          objectFit="cover"
          layout="fill"
          objectPosition="top"
          className="z-0"
          alt="principal image"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-opacity-70 bg-custom-secondary"></div>
      </figure>
      <div className="container z-10 max-w-7xl">
        <div className="relative flex flex-wrap p-6 lg:p-0">
          <figure className="flex items-center justify-center order-2 w-full my-4 lg:order-1 lg:w-1/3 xl:w-1/2 lg:my-0">
            <Image
              width="400"
              height="400"
              src={me}
              alt="photo author"
              placeholder="blur"
            />
          </figure>
          <div className="flex flex-wrap items-center order-1 w-full my-4 lg:w-2/3 lg:order-2 lg:my-0 xl:w-1/2">
            <div className="text-left sm:text-center lg:text-left">
              <h1 className="font-mono text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Luis Martínez</span>{' '}
                <span className="block text-custom-primary xl:inline">
                  frontend developer
                </span>
              </h1>
              <span className="inline-block w-1/5 h-1.5 bg-custom-primary rounded-lg" />

              <p className="text-xl">{summaryAboutMe}</p>
              <NavLink
                href="/sobre-mi"
                className="text-lg border-b-2 border-transparent text-custom-primary hover:border-custom-primary"
              >
                <BsArrowReturnRight size="20" className="inline-block mr-2" />
                Saber más
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Banner }
