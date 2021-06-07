import React from 'react'
import { CardBlog, Title } from '@/components/atoms'
import { useRouter } from 'next/router'
import { IProps } from './type'

const RenderBlog: React.FC<IProps> = ({ posts }) => {
  const router = useRouter()
  const isBlog = router.pathname === '/blog'

  return (
    <section className="flex flex-wrap px-6 py-16 lg:px-0">
      {!isBlog && (
        <div className="w-full">
          <div className="max-w-xl">
            <Title title="Últimos artículos subidos" subTitle="blog" />
          </div>
        </div>
      )}
      <div className="max-w-screen-xl mx-auto">
        {posts.map(post => (
          <React.Fragment key={post.id}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CardBlog post={post} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export { RenderBlog }
