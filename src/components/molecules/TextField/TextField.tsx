import React from 'react'
import { Input, Textarea } from '@/components/atoms'
import { IProps } from './type'

const TextField: React.FC<IProps> = ({ type, className, ...rest }) => (
  <div className={className}>
    {type ? <Input {...rest} type={type} /> : <Textarea {...rest} />}
  </div>
)

export { TextField }
