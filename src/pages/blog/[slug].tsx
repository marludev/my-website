import React from 'react'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { fetchAPI } from '@/utils/api'
import { post } from '@/types'
import { Section } from '@/components/molecules'

type IProps = { post: post }
const PostPage: NextPage<IProps> = ({ post }) => {
  return (
    <article>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl">{post.title}</h1>
        <figure className="relative w-full h-96">
          <Image
            src={post.banner.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="image article"
          />
        </figure>
      </div>
      <div className="max-w-5xl p-10 mx-auto bg-custom-tertiary box-shadow">
        {post.contentSections.map(section => (
          <Section sectionData={section} key={section.id} />
        ))}
      </div>
    </article>
  )
}
export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts: post[] = await fetchAPI('/posts')
  return {
    paths: allPosts?.map(post => `/blog/${post.slug}`) || [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: post[] = await fetchAPI(`/posts?slug=${params?.slug}`)
  return {
    props: {
      post: post[0],
    },
    revalidate: 600,
  }
}
