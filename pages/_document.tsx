import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../components/theme/theme';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8'/>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          <meta name='theme-color' content={theme.palette.primary.main}/>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <title>Nest Next App</title>
        </Head>
        <body className='body'>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key='styles'>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
