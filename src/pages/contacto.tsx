import React from 'react'
import { NextPage } from 'next'
import { Form, CommonQuestions } from '@/components/organisms'

const Contact: NextPage = () => {
  return (
    <div className="container">
      <Form />
      <CommonQuestions />
    </div>
  )
}

export default Contact
