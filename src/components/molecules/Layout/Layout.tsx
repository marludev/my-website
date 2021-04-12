import React from 'react'
import { Header, Footer, ContactMe } from '@/components/molecules'
import { IProps } from './types'
import { useRouter } from 'next/router'

const Layout: React.FC<IProps> = ({ children }) => {
  const router = useRouter()
  return (
    <div className="min-h-screen text-gray-100 bg-custom-secondary">
      <Header />
      <main className="bg-gradient-to-t from-transparent via-custom-tertiary to-transparent">
        {children}
        {router.pathname !== '/contacto' && <ContactMe />}
      </main>
      <Footer />
    </div>
  )
}

export { Layout }
