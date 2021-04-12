import React from 'react'
import { IProps } from './type'
import { RenderIcon } from '@/components/atoms'

const ItemTechnology: React.FC<IProps> = ({
  dataCard: { technology, title },
}) => {
  return (
    <div className="flex-shrink-0 p-4 w-60 sm:w-1/2 xl:w-3/12">
      <div className="p-6 transition duration-300 transform shadow-2xl hover:-translate-y-6 group bg-custom-tertiary hover:bg-custom-primary">
        <RenderIcon
          icon={technology}
          className="mx-auto group-hover:text-custom-tertiary"
          size="100"
        />
        <div className="flex items-center justify-center h-20 group-hover:text-custom-tertiary">
          <p className="mt-5 text-2xl">{title}</p>
        </div>
      </div>
    </div>
  )
}

export { ItemTechnology }
