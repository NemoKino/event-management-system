import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './globals.css';

function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url || !url.startsWith('http')) return new URL('http://localhost:3000');
  try {
    return new URL(url);
  } catch {
    return new URL('http://localhost:3000');
  }
}

export const metadata: Metadata = {
  metadataBase: getBaseUrl(),
  title: {
    default: 'Event Recruiter | VR Community Platform',
    template: '%s | Event Platform',
  },
  description: 'A platform for discovering and recruiting staff for virtual reality events.',
  openGraph: {
    title: 'Event Recruiter | Staffing Platform',
    description: 'A platform for discovering and recruiting staff for virtual reality events.',
    url: '/',
    siteName: 'Event Recruiter',
    locale: 'ja_JP',
    type: 'website',
    images: ['/images/sample-club-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Recruiter | Staffing Platform',
    description: 'A platform for discovering and recruiting staff for virtual reality events.',
    images: ['/images/sample-club-hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Outfit:wght@400;600;700;800&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
