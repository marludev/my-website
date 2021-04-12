import React from 'react'
import { IProps } from './type'

const InputLabel: React.FC<IProps> = ({ active, children }) => {
  return (
    <label
      className={`absolute left-4 transform transition-all ease-in pointer-events-none -translate-y-1/2 px-2 ${
        active
          ? 'top-0 text-xs bg-custom-input left-2'
          : 'text-base bg-transparent top-1/2 left-4'
      }`}
    >
      {children}
    </label>
  )
}

export { InputLabel }
