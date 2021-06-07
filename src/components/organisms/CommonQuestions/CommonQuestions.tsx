import React from 'react'
import { Title } from '@/components/atoms'
import { Question } from '@/components/molecules'
import { dataQuestions } from '@/data'

const CommonQuestions = () => {
  return (
    <div className="p-6 lg:p-0">
      <Title title="Preguntas frecuentes" />
      <div className="flex flex-wrap">
        {dataQuestions.map(item => (
          <React.Fragment key={item.title}>
            <Question
              title={item.title}
              icon={item.icon}
              questions={item.questions}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export { CommonQuestions }
