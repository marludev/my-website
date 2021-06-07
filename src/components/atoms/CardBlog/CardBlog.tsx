import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'
import { IProps } from './type'

const CardBlog: React.FC<IProps> = ({ post }) => {
  const { title, banner, published_at, slug, contentSections } = post
  return (
    <NextLink href={`/blog/${slug}`}>
      <a className="p-4 transition duration-300 rounded-lg hover:bg-custom-tertiary">
        <figure className="relative overflow-hidden rounded-lg h-60">
          <Image
            src={banner.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="image article"
          />
        </figure>
        <div className="mt-4">
          <small className="mb-2 text-gray-500">{published_at}</small>
          <h3 className="mb-1 text-2xl">{title}</h3>
          {contentSections.map(section => (
            <p className="text-sm text-gray-300" key={section._id}>
              {section.__component === 'section.content' &&
                section.content.substr(0, 150)}
            </p>
          ))}
          <BsArrowRightShort
            size="30"
            className="float-right ml-auto text-custom-primary"
          />
        </div>
      </a>
    </NextLink>
  )
}

export { CardBlog }
