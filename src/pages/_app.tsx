import Layout from '@/components/layout/Layout';
import { BLOG_URL } from '@/constants';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
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
        <DefaultSeo
          title="Piva blog"
          description="Blog written by Piva"
          openGraph={{
            type: 'website',
            locale: 'ko-KR',
            url: BLOG_URL,
            siteName: 'Piva blog',
            images: [
              {
                url: '/images/seo/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Opengraph image',
                type: 'image/png',
              },
            ],
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
