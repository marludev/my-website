import React from 'react'
import { GrReactjs, GrNode, GrGraphQl, GrWordpress } from 'react-icons/gr'
import { HiOutlineTag, HiOutlineCode } from 'react-icons/hi'
import { IconsName } from '@/data/type'
import { IconType } from 'react-icons'
import { IProps } from './type'

const icons: Record<IconsName, IconType> = {
  react: GrReactjs,
  node: GrNode,
  graphql: GrGraphQl,
  wordpress: GrWordpress,
  project: HiOutlineCode,
  money: HiOutlineTag,
}

const RenderIcon: React.FC<IProps> = ({ icon, className, size }) => {
  const Icon = icons[icon]
  return <Icon size={size} className={className} />
}

export { RenderIcon }
