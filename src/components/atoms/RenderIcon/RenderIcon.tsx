import React from 'react'
import { GrReactjs, GrNode, GrGraphQl, GrWordpress } from 'react-icons/gr'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { IObjectTechnologys, IProps } from './type'

const icons: IObjectTechnologys = {
  react: GrReactjs,
  node: GrNode,
  graphql: GrGraphQl,
  wordpress: GrWordpress,
  project: AiOutlineFundProjectionScreen,
}

const RenderIcon: React.FC<IProps> = ({ icon, className, size }) => {
  const Icon = icons[icon]
  return <Icon size={size} className={className} />
}

export { RenderIcon }
