import { useStaticRendering } from 'mobx-react-lite';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  useStaticRendering(true);
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
