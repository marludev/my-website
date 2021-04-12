import React from 'react'
import { IProps } from './type'
const ErrorMessage: React.FC<IProps> = ({ message }) => (
  <p className="text-red-500">{message}</p>
)

export { ErrorMessage }
