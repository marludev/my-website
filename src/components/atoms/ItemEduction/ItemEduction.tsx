import React from 'react'
import { IProps } from './type'
import Image from 'next/image'

const ItemEduction: React.FC<IProps> = ({ name, image }) => {
  return (
    <div className="flex items-center p-4 rounded-lg bg-custom-tertiary">
      <figure className="relative w-3/12 mr-2">
        <Image src={image} width="80" height="80" alt="logo course" />
      </figure>
      <h3 className="w-9/12 text-sm md:text-lg">{name}</h3>
    </div>
  )
}

export { ItemEduction }
