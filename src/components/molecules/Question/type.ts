import { icons } from '@/data/type'
export interface IProps {
  title: string
  icon: icons
  questions: Array<questions>
}

interface questions {
  question: string
  response: string
}
