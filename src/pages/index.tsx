import React from 'react'
import { NextPage } from 'next'
import { CardsTechnologies, Banner } from '@/components/molecules'
import { post } from '@/types'

type IProps = { posts: post[] }
const Home: NextPage<IProps> = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <CardsTechnologies />
      </div>
    </>
  )
}
export default Home
