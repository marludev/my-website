import React from 'react'
import { IProps } from './type'

const ItemEduction: React.FC<IProps> = ({ maxLength, index, course }) => {
  const { hours, id, name, platform } = course
  return (
    <div
      className={`relative flex pb-12 ${maxLength !== index && 'md:pb-12'}`}
      key={id}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center w-10 h-full ${
          maxLength === index && 'md:hidden'
        }`}
      >
        <div className="w-1 h-full pointer-events-none bg-custom-primary"></div>
      </div>
      <div className="relative z-10 flex-shrink-0 w-5 h-5 left-2.5 bg-custom-primary" />
      <div className="flex-grow pl-10">
        <h3 className="text-xl font-medium tracking-wider text-white title-font">
          {name}
        </h3>
        <span className="inline-block w-1/5 h-0.5 mb-2 bg-custom-primary" />
        <p className="text-xs leading-relaxed text-white">
          {hours} - {platform}
        </p>
      </div>
    </div>
  )
}

export { ItemEduction }
