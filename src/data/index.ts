import { IDataQuestions, IDataCardsTechnology } from './type'

export const dataCardsTechnology: Array<IDataCardsTechnology> = [
  { title: 'React', technology: 'react' },
  { title: 'Node', technology: 'node' },
  { title: 'Graphql', technology: 'graphql' },
  { title: 'Wordpress', technology: 'wordpress' },
]

export const dataQuestions: Array<IDataQuestions> = [
  {
    title: 'Desarrollo del proyecto',
    icon: 'project',
    questions: [{ question: 'titulo', response: 'respuesta' }],
  },
]
