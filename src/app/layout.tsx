import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smsla.global'),
  title: 'SMS Labs (SMSLA) | NABL Accredited Testing & Inspection Laboratory',
  description:
    'SMS Labs (SMSLA) is an ISO/IEC 17025 NABL Accredited Testing Laboratory in India providing gold-standard analytical services for Food, Water, Environmental, Soil, Seafood, and Industrial Inspection.',
  keywords: [
    'SMS Labs',
    'SMSLA',
    'food testing laboratory',
    'water testing',
    'environmental testing',
    'soil testing',
    'seafood testing',
    'NABL accredited lab India',
    'Chennai',
    'FSSAI approved lab',
    'OHSAS 18001',
    'Inspection services',
  ],
  authors: [{ name: 'SMS Labs Private Limited' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'SMS Labs (SMSLA) | NABL Accredited Testing & Inspection Laboratory',
    description:
      'Premier NABL accredited laboratory for Food, Water, Environmental, Soil, Seafood, and Industrial Inspection with 14+ years of scientific excellence.',
    url: 'https://smsla.global',
    siteName: 'SMS Labs (SMSLA)',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'SMS Labs (SMSLA) - Your Ultimate Quality Partner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMS Labs (SMSLA) | NABL Accredited Testing & Inspection Laboratory',
    description: 'Gold-standard testing & inspection laboratory services across India & abroad.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SMS Labs Private Limited',
    alternateName: 'SMSLA',
    url: 'https://smsla.global',
    logo: 'https://smsla.global/logo.png',
    image: 'https://smsla.global/logo.png',
    description:
      'ISO/IEC 17025 NABL Accredited testing and third-party inspection laboratory for Food, Water, Environmental, Soil, and Seafood products.',
    telephone: '+91-44-26811662',
    email: 'enquiry@smsla.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.0827',
      longitude: '80.2707',
    },
    sameAs: [
      'https://www.linkedin.com/company/sms-labs-private-limited',
      'https://smsla.global',
    ],
  };

  return (
    <html lang="en" data-theme="light" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('smsla_theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = saved || (systemPrefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
