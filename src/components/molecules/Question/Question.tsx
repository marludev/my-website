import React from 'react'
import { ToggleList } from '@/components/atoms'
import { TitleWithIcon } from '@/components/atoms'
import { IProps } from './type'
const Question: React.FC<IProps> = ({ title, icon, questions }) => {
  console.log(questions)

  return (
    <div className="my-6">
      <TitleWithIcon icon={icon} title={title} />
      {questions.map(question => (
        <React.Fragment key={question.question}>
          <ToggleList
            question={question.question}
            response={question.response}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export { Question }
