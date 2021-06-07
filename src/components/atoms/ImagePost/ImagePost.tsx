import React from 'react'
import Image from 'next/image'
import { IProps } from './type'

const ImagePost: React.FC<IProps> = ({ data }): JSX.Element => {
  return (
    <figure className="relative w-full h-96">
      <Image
        src={data.image.url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="image article"
      />
    </figure>
  )
}

export { ImagePost }
