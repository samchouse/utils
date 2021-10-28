import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class Document extends NextDocument {
  public render(): JSX.Element {
    return (
      <Html lang="en" className="dark">
        <Head />
        <body className="font-body dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
