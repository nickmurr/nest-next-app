// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Router from 'next/router';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='body'>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: 'history.scrollRestoration = "manual";',
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
