import { IconsName } from '@/data/type'
export interface IProps {
  title: string
  icon: IconsName
  questions: questions[]
}

interface questions {
  question: string
  response: string
}
