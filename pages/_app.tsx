import type { AppProps } from "next/app";
import Script from "next/script";
import { LanguageProvider } from "@/hooks/useLanguage";
import "@/styles/globals.css";

const GA_MEASUREMENT_ID = "G-D3GHQWJ6HV";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
