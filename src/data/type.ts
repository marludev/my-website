export interface IDataQuestions {
  title: string
  icon: IconsName
  questions: IquestionItem[]
}

interface IquestionItem {
  question: string
  response: string
}

export interface IDataCardsTechnology {
  title: string
  icon: IconsName
}
export type IconsName =
  | 'react'
  | 'node'
  | 'graphql'
  | 'wordpress'
  | 'project'
  | 'money'
