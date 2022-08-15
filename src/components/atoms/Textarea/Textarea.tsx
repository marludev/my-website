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
  rows,
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
      <textarea
        id={name}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        disabled={disabled}
        className="w-full h-40 p-3 transition duration-300 bg-transparent rounded-lg resize-none ring-2 focus:ring-2 hover:ring-2 focus:outline-none focus:ring-custom-primary ring-custom-input hover:ring-custom-primary"
        rows={rows}
      />

      <InputLabel name={name} active={active || !!value}>
        {label}
      </InputLabel>
    </div>
  )
}

export { Textarea }
