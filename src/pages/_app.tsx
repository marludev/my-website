import React from 'react'
import { AppProps } from 'next/app'
import { Layout } from '@/components/molecules'
import 'tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
