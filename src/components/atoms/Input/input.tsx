import React from 'react'
import { IProps } from './type'
import { InputLabel } from '@/components/atoms'
const Input: React.FC<IProps> = ({
  onChange,
  onBlur,
  onFocus,
  label,
  value,
  disabled = false,
  type,
  name,
  autoComplete,
}) => {
  const [active, setActive] = React.useState(false)

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<any, Element>) => {
      setActive(true)
      if (onFocus) onFocus(e)
    },
    [setActive, onFocus]
  )
  const handleBlur = React.useCallback(
    (e: React.FocusEvent<any, Element>) => {
      setActive(false)
      if (onBlur) onBlur(e)
    },
    [setActive, onBlur]
  )
  return (
    <div className="relative">
      <input
        autoComplete={autoComplete}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        disabled={disabled}
        className="w-full p-3 transition duration-300 bg-transparent rounded-lg ring-2 focus:ring-2 hover:ring-2 focus:outline-none focus:ring-custom-primary hover:ring-custom-primary"
      />
      <InputLabel name={name} active={active || !!value}>
        {label}
      </InputLabel>
    </div>
  )
}

export { Input }
