import { Link } from 'gatsby'
// eslint-disable-next-line no-use-before-define
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => {
  const hola = 123
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
