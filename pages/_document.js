import Document, { Html, Head, Main, NextScript } from 'next/document'

const title = "MLED";
const descricao = "A luz que faltava no seu bolso";
const keys = "LED, led, luz, Lâmpada, lampada, MLED, mled, m.led, LEDs, luzes, iluminação";
const tumb = "/Images/MLED - 50 Desconto.webp";
const url = "https://www.mledlampadas.com/"

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
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={descricao} />
            <meta property="og:image" content={tumb} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />

            <meta name="keywords" content={keys} />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="Portuguese" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={descricao} />
            <meta property="og:image" content={tumb} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={descricao} />
            <meta property="twitter:image" content={tumb} />

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
