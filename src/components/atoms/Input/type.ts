import React from 'react'
export interface IProps extends React.InputHTMLAttributes<any> {
  error?: boolean
  value?: React.InputHTMLAttributes<any>['value']
  label?: string
}
