import { IconType } from 'react-icons'

export interface IObjectTechnologys {
  [index: string]: IconType
}
export interface IProps {
  icon: 'react' | 'node' | 'graphql' | 'wordpress' | 'project'
  className: string
  size: string
}
