import Document, { Head, Main, NextScript } from 'next/document'
import { extractStyles } from 'evergreen-ui'
import * as snippet from '@segment/snippet'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const {
  ANALYTICS_WRITE_KEY = 'fdhswOnXNIOMwzHDtMx0elBmyX4zZO9i',
  NODE_ENV = 'development',
} = process.env

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const { css, hydrationScript } = extractStyles()
    return { ...page, css, hydrationScript }
  }

  renderSnippet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true,
    }

    if (NODE_ENV === 'development') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

  render(...props) {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          {this.props.hydrationScript}

          <title>{props.title || ''}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content={props.description || defaultDescription}
          />
          <meta property="og:url" content={props.url || defaultOGURL} />
          <meta property="og:title" content={props.title || ''} />
          <meta
            property="og:description"
            content={props.description || defaultDescription}
          />
          <meta name="twitter:site" content={props.url || defaultOGURL} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={props.ogImage || defaultOGImage}
          />
          <meta property="og:image" content={props.ogImage || defaultOGImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />

          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/mailtoharshit/San-Francisco-Font-/master/sanfrancisco.css"
          />
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
