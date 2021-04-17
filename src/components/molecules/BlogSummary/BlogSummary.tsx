import React from 'react'
import { ItemBlogSummary, Title, ItemBlog } from '@/components/atoms'
import { useRouter } from 'next/router'

const BlogSummary = () => {
  const router = useRouter()
  const isBlog = router.pathname === '/blog'
  const articles = [
    {
      image: 'https://picsum.photos/200/300',
      date: 'Feb 01 2021',
      title:
        '1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerumcupiditate, quaerat illum error eius sapiente.',
      url: '/blog',
    },
    {
      image: 'https://picsum.photos/200/300',
      date: 'Feb 01 2021',
      title:
        '2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerumcupiditate, quaerat illum error eius sapiente.',
      url: '/blog',
    },
    {
      image: 'https://picsum.photos/200/300',
      date: 'Feb 01 2021',
      title:
        '3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerumcupiditate, quaerat illum error eius sapiente.',
      url: '/blog',
    },
  ]
  const dataTitle = {
    title:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, rem!',
    subTitle: 'blog',
  }

  return (
    <section className="flex flex-wrap px-6 py-16 lg:py-32 lg:px-0">
      {!isBlog && (
        <div className="w-full lg:w-1/2">
          <div className="max-w-xl">
            <Title dataTitle={dataTitle} />
          </div>
        </div>
      )}
      <div className={`w-full ${!isBlog && 'lg:w-1/2'}`}>
        <div className="divide-y-2 divide-gray-500 divide-solid">
          {articles.map(artitle => (
            <React.Fragment key={artitle.title}>
              {isBlog ? (
                <ItemBlog artitle={artitle} />
              ) : (
                <ItemBlogSummary artitle={artitle} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export { BlogSummary }
