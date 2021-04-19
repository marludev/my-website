import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { IProps } from './type'
import { NextSeo, NextSeoProps } from 'next-seo'

const SEO = ({
  isTemplate = true,
  type = 'website',
  ...props
}: IProps & NextSeoProps) => {
  const router = useRouter()
  // TODO recuerda acomodar esto
  const title = props.title ? props.title : 'title default'
  const parsedTitle = isTemplate ? '%s | @marludev'.replace('%s', title) : title
  const description = props.description
  const shareImage = props.shareImage ? props.shareImage : 'imagen default'

  return (
    <NextSeo
      title={parsedTitle}
      description={description}
      canonical={`https://marludev.com/${router.asPath}`}
      openGraph={{
        url: `https://marludev.com/${router.asPath}`,
        title: parsedTitle,
        description,
        images: [{ url: shareImage }],
        site_name: parsedTitle,
        type,
        locale: 'es',
      }}
      twitter={{
        handle: '@marludev',
        site: '@marludev',
        cardType: 'summary_large_image',
      }}
      {...props}
    />
  )
}

export { SEO }
