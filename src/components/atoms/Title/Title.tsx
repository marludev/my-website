import React from 'react'
import { IProps } from './type'

const Title: React.FC<IProps> = ({ dataTitle: { subTitle, title } }) => {
  return (
    <>
      {subTitle && <p className="text-gray-400"> - {subTitle}</p>}
      <h3 className="text-2xl font-medium ">{title}</h3>
      <span className="inline-block w-52 max-w-xs h-0.5 mb-2 bg-custom-primary" />
    </>
  )
}

export { Title }
