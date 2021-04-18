import React from 'react'
import NextLink from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'
import { IProps } from './type'
import Image from 'next/image'
const ItemBlog: React.FC<IProps> = ({
  artitle: { date, title, url, image },
}) => {
  return (
    <NextLink href={url}>
      <a className="flex flex-wrap p-4 transition duration-300 hover:bg-custom-tertiary">
        <div className="relative w-full h-60 md:h-auto lg:w-3/12 md:w-4/12">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="image article"
          />
        </div>
        <div className="flex flex-wrap py-4 md:p-6 md:w-7/12">
          <h3 className="w-full text-lg md:tracking-wider lg:text-2xl">
            {title}
          </h3>
          <span className="inline-block w-52 max-w-xs h-0.5 mb-2 bg-custom-primary" />
          <p className="w-full mb-2 text-sm text-gray-500">{date}</p>
          <p className="w-full lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            quidem molestias eius earum, aut quis reiciendis voluptatum maxime
            assumenda possimus.
          </p>
        </div>
        <div className="flex items-center ml-auto md:w-1/12 lg:w-2/12">
          <BsArrowRightShort
            size="40"
            className="float-right ml-auto text-custom-primary"
          />
        </div>
      </a>
    </NextLink>
  )
}

export { ItemBlog }
