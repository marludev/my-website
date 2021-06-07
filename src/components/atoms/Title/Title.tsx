import React from 'react'
import { IProps } from './type'

const Title: React.FC<IProps> = ({ subTitle, title }) => {
  return (
    <div className="mb-10">
      {subTitle && <p className="text-gray-400"> - {subTitle}</p>}
      <h2 className="mb-2 text-3xl font-medium">{title}</h2>
      <span className="inline-block h-1 max-w-xs rounded-lg w-52 bg-custom-primary" />
    </div>
  )
}

export { Title }
