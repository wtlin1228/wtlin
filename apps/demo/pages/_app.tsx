import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider, BaseStyles } from '@wtlin/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to demo!</title>
      </Head>
      <main className="app">
        <ThemeProvider colorMode="auto">
          {/* <ThemeProvider colorMode="dark"> */}
          <BaseStyles>
            <Component {...pageProps} />
          </BaseStyles>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
