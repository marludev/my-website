import React from 'react'
import { NextPage } from 'next'
import { Education, AboutMe } from '@/components/molecules'
const About: NextPage = () => {
  return (
    <div className="container">
      <AboutMe />
      <Education />
    </div>
  )
}

export default About
