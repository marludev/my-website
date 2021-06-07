import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { CardsTechnologys, RenderBlog, Banner } from '@/components/molecules'
import { fetchAPI } from '@/utils/api'
import { post } from '@/types'

type IProps = { posts: post[] }
const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <>
      <Banner />
      <div className="container">
        <CardsTechnologys />
        <RenderBlog posts={posts} />
      </div>
    </>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts: post[] = await fetchAPI('/posts?_limit=3')
  return {
    props: {
      posts,
    },
  }
}
