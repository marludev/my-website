import React from 'react'
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | false | undefined
  helpText?: string
  label?: string
  contentLeft?: React.ReactNode
  contentRight?: React.ReactNode
  value?: string | number
  name: string
  rows?: number
}
