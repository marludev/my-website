import React from 'react'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import { Header, Footer, ContactMe } from '@/components/molecules'
import { IProps } from './types'
import { baseURL } from '@/data'
const Layout: React.FC<IProps> = ({ children }) => {
  const router = useRouter()

  return (
    <React.Fragment>
      <DefaultSeo
        canonical={`${baseURL}${router.asPath}`}
        description="Luis Martinez desarrollador frontend, con experiencia trabajando con React, React Native y Nodejs"
        title="Luis Martinez - Frontend Developer"
        openGraph={{
          type: 'website',
          locale: 'es_VE',
          url: `${baseURL}${router.asPath}`,
          site_name: 'Luis Martinez -  Frontend Developer',
          images: [{ url: `${baseURL}banner.jpg`, width: 1200, height: 628 }],
          title: 'Luis Martinez -  Frontend Developer',
        }}
        twitter={{
          handle: '@marludev',
          site: '@marludev',
          cardType: 'summary_large_image',
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Luis Gabriel Martinez Pabon"
        url="https://www.marludev.com"
        sameAs={[
          'https://www.linkedin.com/in/marludev',
          'https://twitter.com/marludev',
        ]}
      />
      <div className="min-h-screen text-gray-100 bg-custom-secondary">
        <Header />
        <main>
          {children}
          {router.pathname !== '/contacto' && <ContactMe />}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export { Layout }
