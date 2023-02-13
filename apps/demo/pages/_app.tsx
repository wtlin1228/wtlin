import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@wtlin/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to demo!</title>
      </Head>
      <main className="app">
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
