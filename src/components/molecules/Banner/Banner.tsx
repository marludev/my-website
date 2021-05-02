import React from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Image from 'next/image'
import { NavLink, Title } from '@/components/atoms'
import { summaryAboutMe } from '@/data'
import { IProps } from './type'

const Banner: React.FC<IProps> = ({
  isHome = true,
  title,
  image = '/header.jpg',
}) => {
  const dataTitle = { title: 'Un poco sobre mi', subTitle: 'Introducción' }
  return (
    <div className="relative flex items-center py-32 xl:py-52 2xl:py-60">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0"
          alt="principal image"
        />
        <div className="absolute inset-0 bg-opacity-70 bg-custom-secondary"></div>
      </div>
      <div className="container z-10">
        <div className="flex flex-wrap p-6 lg:p-0">
          <div
            className={`flex items-center w-full my-4 lg:my-0 ${
              isHome && 'md:w-1/2'
            }`}
          >
            <div className={`${isHome ? 'max-w-xl' : 'max-w-4xl'}`}>
              <h1
                className={`font-semibold ${
                  isHome ? 'text-6xl xl:text-8xl' : 'xl:text-4xl text-2xl'
                }`}
              >
                {title}
              </h1>
              <span className="inline-block w-1/5 h-1.5 bg-custom-primary" />
            </div>
          </div>
          {isHome && (
            <div className="flex items-center my-4 md:w-1/2 lg:my-0">
              <div className="max-w-xl">
                <Title dataTitle={dataTitle} />
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
          )}
        </div>
      </div>
    </div>
  )
}

export { Banner }
