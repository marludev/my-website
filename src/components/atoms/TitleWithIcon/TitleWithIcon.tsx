import React from 'react'
import { IProps } from './type'
import { RenderIcon } from '@/components/atoms'

const TitleWithIcon: React.FC<IProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-start max-w-md">
      <RenderIcon icon={icon} size="50" className="mr-4 text-custom-primary" />
      <h3 className="text-xl text-white">{title}</h3>
    </div>
  )
}

export { TitleWithIcon }
