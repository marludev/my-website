export interface IProps {
  title: string
  icon: 'react' | 'node' | 'graphql' | 'wordpress' | 'project'
  questions: Array<questions>
}

interface questions {
  question: string
  response: string
}