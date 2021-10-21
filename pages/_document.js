import Document, { Html, Head, Main, NextScript } from 'next/document'

const title = "MLED";
const descricao = "A luz que faltava no seu bolso";
const keys = "LED, led, luz, Lâmpada, lampada, MLED, mled, m.led, LEDs, luzes, iluminação";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
      return (
        <Html lang="pt-br">
          <Head>
            <link rel="shortcut icon" href="/MLED - Favicon.png" />

            <meta name="title" content={title} />
            <meta name="description" content={descricao} />

            <meta name="keywords" content={keys} />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="Portuguese" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={descricao} />
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content={title} />

            <meta name="keywords" content={keys} />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="Portuguese" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={descricao} />
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={descricao} />
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

          </Head>
          <body>
        <Main />
      <NextScript />
    </body>
  </Html>
  )
  }
}

export default MyDocument;
