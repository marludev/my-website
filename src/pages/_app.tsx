import React from 'react'
import { AppProps } from 'next/app'
import { Layout } from '@/components/molecules'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
