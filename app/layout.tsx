import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { CartProvider } from '@/components/site/cart-provider';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { siteUrl } from '@/lib/site-config';
import './globals.css';

const geistSans = localFont({
  src: './fonts/geist-latin.woff2',
  variable: '--font-geist-sans',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'TonTon BushCraft — Firesteels artisanaux',
    template: '%s — TonTon BushCraft',
  },
  description:
    'Firesteels et créations artisanales façonnés à la main dans l’arrière-pays niçois.',
  metadataBase: new URL(siteUrl),
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'TonTon BushCraft — Le feu. À votre mesure.',
    description: 'Firesteels et créations artisanales façonnés à la main dans l’arrière-pays niçois.',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'TonTon BushCraft — Le feu. À votre mesure.' }],
    locale: 'fr_FR',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TonTon BushCraft — Le feu. À votre mesure.',
    description: 'Firesteels et créations artisanales façonnés à la main dans l’arrière-pays niçois.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} antialiased`}>
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
