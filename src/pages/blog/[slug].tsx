import React from 'react'
import { NextPage } from 'next'
import { Banner } from '@/components/molecules'

const PostPage: NextPage = () => {
  return (
    <>
      <Banner
        title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iusto?"
        isHome={false}
      />
      <div className="container p-10 transform -translate-y-20 bg-custom-input box-shadow">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          blanditiis!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          laboriosam dolorum saepe deleniti quisquam id repellat quod! Illo
          adipisci ut omnis excepturi molestiae rerum alias harum in nemo
          quisquam voluptatibus nesciunt commodi sequi, natus aliquam
          cupiditate, ipsum doloremque tempora veritatis eum, voluptate nobis.
          Enim atque beatae aperiam optio tenetur voluptates.
        </p>
      </div>
    </>
  )
}
export default PostPage
