import '../styles/globals.css'
import 'tailwindcss/tailwind.css' 
import NProgress from 'nprogress';
import Router from 'next/router';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#3437eb" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp
