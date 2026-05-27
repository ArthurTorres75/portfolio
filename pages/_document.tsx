import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#020617" />
        <link rel="icon" type="image/svg+xml" href="/portfolio/favicon.svg" />
        <link rel="shortcut icon" href="/portfolio/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
