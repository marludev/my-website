import React from 'react'
import { Input, Textarea } from '@/components/atoms'
import { IProps } from './type'

const TextField: React.FC<IProps> = ({ rows, className, ...rest }) => (
  <div className={className}>
    {!rows ? <Input {...rest} /> : <Textarea {...rest} rows={rows} />}
  </div>
)

export { TextField }
