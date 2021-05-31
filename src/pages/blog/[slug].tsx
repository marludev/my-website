import React from 'react'
import { NextPage } from 'next'
import { CodeBlock } from '@/components/organisms'
const PostPage: NextPage = () => {
  const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim()
  return (
    <>
      <div className="max-w-5xl p-10 mx-auto bg-custom-tertiary box-shadow">
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
        <CodeBlock className="language-jsx" code={exampleCode} />
      </div>
    </>
  )
}
export default PostPage
