import React from 'react'
import { IProps } from './type'
import { RenderIcon } from '@/components/atoms'

const CardTechnology: React.FC<IProps> = ({ dataCard: { icon, title } }) => {
  return (
    <div className="flex-shrink-0 w-1/2 p-4 xl:w-3/12">
      <div className="p-6 transition duration-500 ease-in-out transform rounded-lg hover:-translate-y-1 hover:scale-110 group hover:shadow-primarycolor">
        <RenderIcon
          icon={icon}
          className="mx-auto group-hover:text-custom-primary"
          size="100"
        />
        <div className="flex items-center justify-center h-20 group-hover:text-custom-primary">
          <p className="mt-5 text-2xl">{title}</p>
        </div>
      </div>
    </div>
  )
}

export { CardTechnology }
