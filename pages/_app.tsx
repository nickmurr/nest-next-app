import React from 'react';
import App from 'next/app';
import Router from 'next/router';

class MyApp extends App {
  componentDidMount() {
    window.history.scrollRestoration = 'manual';
    const cachedScrollPositions: any[] = [];
    let shouldScrollRestore = { x: 0, y: 0 };

    Router.events.on('routeChangeStart', () => {
      cachedScrollPositions.push([window.scrollX, window.scrollY]);
    });

    Router.events.on('routeChangeComplete', () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore;
        window.scrollTo(x, y);
        shouldScrollRestore = null;
      }
    });

    Router.beforePopState(() => {
      const [x, y] = cachedScrollPositions.pop();
      shouldScrollRestore = { x, y };

      return true;
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className='auto'>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
