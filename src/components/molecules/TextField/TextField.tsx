import React from 'react'
import { Input, ErrorMessage, Textarea } from '@/components/atoms'
import { IProps } from './type'

const TextField: React.FC<IProps> = ({ error, type, className, ...rest }) => (
  <div className={className}>
    {type ? (
      <Input error={!!error} {...rest} type={type} />
    ) : (
      <Textarea error={!!error} {...rest} />
    )}
    {error && <ErrorMessage message={error} />}
  </div>
)

export { TextField }
