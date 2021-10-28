import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import SEO from '../../next-seo.config';
import '../styles/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Utils - A Cool Repo</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
