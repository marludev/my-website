import React from 'react'
import { TextPost, ImagePost } from '@/components/atoms'
import { CodeBlock } from '@/components/organisms'
import { IProps } from './type'

const sectionComponents = {
  'section.code': CodeBlock,
  'section.image': ImagePost,
  'section.content': TextPost,
}

const Section: React.FC<IProps> = ({ sectionData }) => {
  const SectionComponent = sectionComponents[sectionData.__component]
  // @ts-ignore //TODO: investigate this error
  return <SectionComponent data={sectionData} />
}
export { Section }
