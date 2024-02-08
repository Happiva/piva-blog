import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Comfortaa, Noto_Sans_KR } from 'next/font/google';

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <Layout className={`${notoSansKr.className} ${comfortaa.variable}`}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
