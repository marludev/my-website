import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { RenderBlog } from '@/components/molecules'
import { fetchAPI } from '@/utils/api'
import { post } from '@/types'

type IProps = { posts: post[] }
const Blog: NextPage<IProps> = ({ posts }) => {
  return (
    <div className="container">
      {posts.length >= 1 ? (
        <RenderBlog posts={posts} />
      ) : (
        <div className="flex items-center justify-center p-6 h-96">
          <h3 className="text-2xl text-center">
            Próximamente estaré subiendo muchos artículos 😊
          </h3>
        </div>
      )}
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
