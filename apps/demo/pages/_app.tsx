import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import { ThemeProvider, BaseStyles } from '@wtlin/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to demo!</title>
      </Head>
      <main className="app">
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script id="set-color-mode" strategy="beforeInteractive">
          {`
            try {
              let mode = localStorage.getItem('wtlin-ui-color-mode');
              if (!mode) {
                const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                mode = preferDarkMode ? 'dark' : 'light';
                localStorage.setItem('wtlin-ui-color-mode', mode)
              }
              if (mode) {
                document.documentElement.classList.add('wtlin-ui-' + mode);
              }
            } catch (e) {}
          `}
        </Script>
        <ThemeProvider>
          <BaseStyles>
            <Component {...pageProps} />
          </BaseStyles>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
