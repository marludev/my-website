export interface IDataQuestions {
  title: string
  icon: 'react' | 'node' | 'graphql' | 'wordpress' | 'project'
  questions: [
    {
      question: string
      response: string
    }
  ]
}

export interface IDataCardsTechnology {
  title: string
  technology: 'react' | 'node' | 'graphql' | 'wordpress' | 'project'
}
