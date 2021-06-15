import React from 'react'
import { IProps } from './type'
import { InputLabel } from '@/components/atoms'
const Textarea: React.FC<IProps> = ({
  onChange,
  onBlur,
  onFocus,
  label,
  value,
  disabled = false,
  name,
}) => {
  const [active, setActive] = React.useState(false)

  const handleFocus = React.useCallback(
    e => {
      setActive(true)
      if (onFocus) onFocus(e)
    },
    [setActive, onFocus]
  )
  const handleBlur = React.useCallback(
    e => {
      setActive(false)
      if (onBlur) onBlur(e)
    },
    [setActive, onBlur]
  )
  return (
    <div className="relative">
      <textarea
        required
        id={name}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        disabled={disabled}
        className="w-full px-4 py-3 transition duration-300 resize-none bg-custom-input ring-2 focus:ring-2 hover:ring-2 focus:outline-none h-36 focus:ring-custom-primary hover:ring-custom-primary"
      />

      <InputLabel name={name} active={active || !!value}>
        {label}
      </InputLabel>
    </div>
  )
}

export { Textarea }
