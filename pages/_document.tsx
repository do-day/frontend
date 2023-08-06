import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" />
        <link rel="apple-touch-icon" href="/logo192.png"></link>
        <meta name="theme-color" content="#0083cd" />
      </Head>
      <body>
        <Script
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`}
        ></Script>
        <Main />
        <div id="modal-root"></div>
        <NextScript />
      </body>
    </Html>
  );
}
