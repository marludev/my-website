import { IconType } from 'react-icons'
import { icons } from '@/data/type'

export interface IObjectTechnologys {
  [index: string]: IconType
}
export interface IProps {
  icon: icons
  className: string
  size: string
}
