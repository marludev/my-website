import React from 'react'
export interface IProps extends React.InputHTMLAttributes<any> {
  value?: React.InputHTMLAttributes<any>['value']
  label?: string
  name: string
  rows?: number
}
