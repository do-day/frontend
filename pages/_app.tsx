import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MemberProvider from '@/contexts/member';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MemberProvider>
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <link rel="manifest" href="/manifest.json" />
            <link href="/favicon.ico" rel="icon" />
            <link rel="apple-touch-icon" href="/logo192.png"></link>
            <meta name="theme-color" content="#0083cd" />
          </Head>
          <Component {...pageProps} />
        </MemberProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
