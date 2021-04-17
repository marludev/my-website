import React from 'react'
export interface IProps {
  title: string
  isTemplate?: boolean
  description?: string
  shareImage?: string
  type?: string
  date?: string
  children?: React.ReactNode
}
