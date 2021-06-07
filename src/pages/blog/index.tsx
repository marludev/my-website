import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { RenderBlog } from '@/components/molecules'
import { fetchAPI } from '@/utils/api'
import { post } from '@/types'

type IProps = { posts: post[] }
const Blog: NextPage<IProps> = ({ posts }) => {
  return (
    <div className="container">
      <RenderBlog posts={posts} />
    </div>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const posts: post[] = await fetchAPI('/posts')
  return {
    props: {
      posts,
    },
  }
}
