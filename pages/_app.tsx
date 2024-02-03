import favicon from '../public/favicon.ico';
import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
  <SessionProvider session={session}>
    <Head>
        <link rel="icon" href="/favicon.ico" /> 
    </Head>
      <Component {...pageProps} />
  </SessionProvider>
  );
}


export default MyApp
