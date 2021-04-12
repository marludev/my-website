import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { IProps } from './type'

const SEO: React.FC<IProps> = ({
  isTemplate = true,
  type = 'website',
  date,
  children,
  ...props
}) => {
  const router = useRouter()

  const title = props.title
  const parsedTitle = isTemplate ? '%s | @marludev'.replace('%s', title) : title

  return (
    <Head>
      <title>{parsedTitle}</title>
      <meta name="robots" content="follow, index" />
      <meta key="description" content={props.description} name="description" />
      <meta
        key="og:url"
        property="og:url"
        content={`https://marludev.com${router.asPath}`}
      />
      <meta key="og:type" property="og:type" content={type} />
      <meta
        key="og:site_name"
        property="og:site_name"
        content="Daniel Esteves"
      />
      <meta
        key="og:description"
        property="og:description"
        content={props.description}
      />
      <meta key="og:title" property="og:title" content={parsedTitle} />
      <meta key="og:image" property="og:image" content={props.shareImage} />
      <meta key="og:image:type" property="og:image:type" content="image/jpeg" />
      <meta key="og:image:alt" property="og:image:alt" content={parsedTitle} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content="@danestves" />
      <meta key="twitter:creator" name="twitter:creator" content="@danestves" />
      <meta key="twitter:title" name="twitter:title" content={parsedTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={props.description}
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        content={props.shareImage}
      />
      <meta
        key="twitter:image:alt"
        name="twitter:image:alt"
        content={parsedTitle}
      />
      {date && (
        <meta
          key="article:published_time"
          property="article:published_time"
          content={date}
        />
      )}
      {children}
    </Head>
  )
}

export { SEO }
