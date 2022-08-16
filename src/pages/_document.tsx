import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta
            name="google-site-verification"
            content="_-Rlumz1aPyyWCi_S28LCy7_UX9oBAcgHWc1mdL7TE8"
          />
          <meta charSet="utf-8" />
        </Head>
        <body className="text-gray-100  bg-custom-secondary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
