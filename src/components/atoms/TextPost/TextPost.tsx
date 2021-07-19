import React from 'react'
import { IProps } from './types'
import Markdown from 'react-markdown'

const TextPost: React.FC<IProps> = ({ data }): JSX.Element => (
  <Markdown className="tracking-wide prose-lg">{data.content}</Markdown>
)

export { TextPost }
