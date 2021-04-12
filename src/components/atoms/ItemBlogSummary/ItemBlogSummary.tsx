import React from 'react'
import NextLink from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'
import { IProps } from './type'

const ItemBlogSummary: React.FC<IProps> = ({
  artitle: { date, title, url },
}) => {
  return (
    <NextLink href={url}>
      <a className="flex flex-col p-4 transition duration-300 hover:bg-custom-tertiary lg:flex-row">
        <p className="text-gray-500">{date}</p>
        <p className="max-w-md mx-auto text-lg">{title}</p>
        <BsArrowRightShort
          size="30"
          className="float-right ml-auto text-custom-primary"
        />
      </a>
    </NextLink>
  )
}

export { ItemBlogSummary }
