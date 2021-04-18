import React from 'react'
import { NextPage } from 'next'
import { Technology, BlogSummary, Banner } from '@/components/molecules'

const Home: NextPage = () => {
  return (
    <>
      <Banner title="Luis Martinez" />
      <div className="container">
        <Technology />
        <BlogSummary />
      </div>
    </>
  )
}
export default Home
