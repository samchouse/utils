import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class Document extends NextDocument {
  public render(): JSX.Element {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-body dark:bg-gray-900 overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
