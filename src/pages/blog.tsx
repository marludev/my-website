import React from 'react'
import { NextPage } from 'next'
import { BlogSummary } from '@/components/molecules'
const Blog: NextPage = () => {
  return (
    <div className="container">
      <BlogSummary />
    </div>
  )
}

export default Blog
