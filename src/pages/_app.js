import React from 'react';
import App, { Container } from 'next/app';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { ThemeProvider } from 'react-jss';

import { initializeStore } from '~/store';
import theme from '~/theme.config';

const isServer = typeof window === 'undefined';
const REDUX_STORE_KEY = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }
  // Create store if unavailable on the client and set it on the window object
  if (!window[REDUX_STORE_KEY]) {
    window[REDUX_STORE_KEY] = initializeStore(initialState);
  }
  return window[REDUX_STORE_KEY];
}

export default class AppWithRedux extends App {
  static async getInitialProps(appContext) {
    const reduxStore = getOrCreateStore({
      user: { isAuthenticated: true }
    });
    // eslint-disable-next-line no-param-reassign
    appContext.ctx.reduxStore = reduxStore;

    let appProps = {};
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps(appContext);
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState()
    };
  }

  constructor(props) {
    super(props);
    this.reduxStore = getOrCreateStore(props.initialReduxState);
  }

  componentDidMount() {
    const style = document.getElementById('server-side-styles');
    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ReduxStoreProvider store={this.reduxStore}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ReduxStoreProvider>
      </Container>
    );
  }
}
