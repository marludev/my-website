import React from 'react'
import { ToggleList, TitleWithIcon } from '@/components/atoms'
import { IProps } from './type'

const Question: React.FC<IProps> = ({ title, icon, questions }) => {
  return (
    <div className="w-full my-6 overflow-hidden md:w-1/2">
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
