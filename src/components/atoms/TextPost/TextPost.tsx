import React from 'react'
import { IProps } from './types'

const TextPost: React.FC<IProps> = ({ data }): JSX.Element => (
  <div>{data.content}</div>
)

export { TextPost }
