import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
import { JssProvider, SheetsRegistry } from 'react-jss';

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    // Get application config values
    const config = getConfig();
    const { publicRuntimeConfig } = config;
    // Get JSS config values
    const stylesheets = new SheetsRegistry();
    const page = context.renderPage(App => props => (
      <JssProvider registry={stylesheets}>
        <App {...props} />
      </JssProvider>
    ));

    return {
      ...page,
      ...publicRuntimeConfig,
      stylesheets
    };
  }

  render() {
    const year = new Date().getFullYear();
    const { description, domain, keywords, stylesheets } = this.props;

    return (
      <html lang="en" style={{ boxSizing: 'border-box' }}>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta
            name="viewport"
            content="user-scalable=yes, width=device-width, initial-scale=1, maximum-scale=2"
          />
          <meta name="author" content="Perksy" />
          <meta name="copyright" content={`Copyright (c) Perksy ${year}`} />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          {/* <meta name="robots" content={robots} /> */}

          <link rel="canonical" href={domain} />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <style id="server-side-styles">{stylesheets.toString()}</style>
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
