/* eslint-disable camelcase */
export type post = {
  id: string
  _id: string
  title: string
  slug: string
  published_at: string
  createdAt: string
  updatedAt: string
  banner: {
    url: string
    formats: {
      thumbnail: contentFormatImage
      large: contentFormatImage
      medium: contentFormatImage
      small: contentFormatImage
    }
  }
  contentSections: sections[]
}
export type sectionContent = {
  __component: 'section.content'
  content: string
  _id: string
  id: string
}
export type sectionImage = {
  __component: 'section.image'
  _id: string
  id: string
  image: {
    url: string
    formats: {
      thumbnail: contentFormatImage
      large: contentFormatImage
      medium: contentFormatImage
      small: contentFormatImage
    }
  }
}
export type sectionCode = {
  __component: 'section.code'
  _id: string
  id: string
  code: string
  titleCode: string
  extension: extension
}
export type contentFormatImage = {
  name: string
  url: string
}
export type sections = sectionContent | sectionImage | sectionCode

export type extension =
  | 'jsx'
  | 'bash'
  | 'css'
  | 'javascript'
  | 'git'
  | 'graphql'
  | 'json'
  | 'markdown'
  | 'python'
  | 'tsx'
  | 'typescript'
