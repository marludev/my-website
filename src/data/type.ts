export interface IDataQuestions {
  title: string
  icon: 'react' | 'node' | 'graphql' | 'wordpress' | 'project' | 'money'
  questions: Array<IquestionItem>
}

interface IquestionItem {
  question: string
  response: string
}

export interface IDataCardsTechnology {
  title: string
  technology: 'react' | 'node' | 'graphql' | 'wordpress' | 'project' | 'money'
}
