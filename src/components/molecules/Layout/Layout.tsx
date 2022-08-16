import React from 'react'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import CookieConsent from 'react-cookie-consent'
import { Header, Footer, CallToAction } from '@/components/molecules'
import { IProps } from './types'
import { baseURL } from '@/data'

const Layout: React.FC<IProps> = ({ children }) => {
  const router = useRouter()

  const acceptConsent = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
    })
  }

  const declineConsent = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
    })
  }
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
      <div className="min-h-screen">
        <Header />
        <main>
          {children}
          {router.pathname !== '/contacto' && <CallToAction />}
        </main>
        <Footer />
      </div>
      <CookieConsent
        disableButtonStyles
        enableDeclineButton
        containerClasses="!bg-gray-200 flex flex-wrap !items-center p-2"
        buttonWrapperClasses="flex flex justify-center h-full lg:justify-end flex-wrap w-full lg:w-96"
        buttonClasses="bg-custom-primary p-2 w-20 mx-5 rounded-lg"
        buttonText="Ok"
        declineButtonClasses="bg-red-500 p-2 w-20 rounded-lg"
        declineButtonText="No"
        cookieName="cookie_consent"
        location="bottom"
        onAccept={acceptConsent}
        onDecline={declineConsent}
      >
        <p className="ml-3 text-sm font-medium text-black">
          Este sitio utiliza cookies para brindarle una mejor experiencia de
          usuario. Para obtener más información, consulte nuestra{' '}
          <a
            className="underline"
            href="https://www.privacypolicies.com/live/a5d8c078-e837-4ab1-aaea-af158463efcb"
            rel="noopener noreferrer"
            target="_blank"
          >
            Política de cookies
          </a>
        </p>
      </CookieConsent>
    </React.Fragment>
  )
}

export { Layout }
