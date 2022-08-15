import React from 'react'
import { IProps } from './type'

const InputLabel: React.FC<IProps> = ({ active, children, name }) => {
  return (
    <label
      htmlFor={name}
      className={`absolute left-4 transform transition-all ease-in pointer-events-none -translate-y-1/2 px-2 ${
        active
          ? '-top-3 text-xs left-2'
          : name === 'message'
          ? 'text-base bg-transparent top-1/4 left-4'
          : 'text-base bg-transparent top-1/2 left-4'
      }`}
    >
      {children}
    </label>
  )
}

export { InputLabel }
