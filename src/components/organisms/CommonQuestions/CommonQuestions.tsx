import React from 'react'
import { Title } from '@/components/atoms'
import { Question } from '@/components/molecules'
import { dataQuestions } from '@/data'

const CommonQuestions = () => {
  const dataTitle = {
    title: 'Preguntas frecuentes',
  }
  return (
    <div>
      <Title dataTitle={dataTitle} />
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
  )
}

export { CommonQuestions }
