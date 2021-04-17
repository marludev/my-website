export interface IDataQuestions {
  title: string
  icon: icons
  questions: Array<IquestionItem>
}

interface IquestionItem {
  question: string
  response: string
}

export interface IDataCardsTechnology {
  title: string
  icon: icons
}
export type icons =
  | 'react'
  | 'node'
  | 'graphql'
  | 'wordpress'
  | 'project'
  | 'money'
