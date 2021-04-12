import React from 'react'
import { ItemBlogSummary, Title } from '@/components/atoms'

const BlogSummary = () => {
  const articles = [
    {
      date: 'Feb 01 2021',
      title:
        '1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerumcupiditate, quaerat illum error eius sapiente.',
      url: '/blog',
    },
    {
      date: 'Feb 01 2021',
      title:
        '2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerumcupiditate, quaerat illum error eius sapiente.',
      url: '/blog',
    },
    {
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
      <div className="w-full lg:w-1/2">
        <div className="max-w-xl">
          <Title dataTitle={dataTitle} />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="divide-y-2 divide-gray-500 divide-solid">
          {articles.map(artitle => (
            <ItemBlogSummary key={artitle.title} artitle={artitle} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { BlogSummary }
