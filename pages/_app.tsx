import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import withReduxStore from '../redux/hoc/index';

interface IProps {
  reduxStore: any
}

class MyApp extends App<IProps> {
  componentDidMount() {
    window.history.scrollRestoration = 'auto';
    const cachedScrollPositions: number[][] = [];
    let shouldScrollRestore: { x: number, y: number };

    Router.events.on('routeChangeStart', () => {
      cachedScrollPositions.push([window.scrollX, window.scrollY]);
    });

    Router.events.on('routeChangeComplete', () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore;
        window.scrollTo(x, y);
        shouldScrollRestore = null;
      }
      window.history.scrollRestoration = 'auto';
    });

    Router.beforePopState(() => {
      if (cachedScrollPositions.length > 0) {
        const [x, y] = cachedScrollPositions.pop();
        shouldScrollRestore = { x, y };
      }
      window.history.scrollRestoration = 'manual';
      return true;
    });
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <div className='auto'>
          <Component {...pageProps} />
        </div>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
