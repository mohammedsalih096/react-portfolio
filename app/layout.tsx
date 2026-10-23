import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Navbar from '../src/components/Navbar';
import './globals.css';

const description = 'Mohammed Salih is a software developer building thoughtful web and mobile experiences, with recent work in business websites and product development.';

export const metadata: Metadata = {
  title: {
    default: 'Mohammed Salih S A — Software Developer',
    template: '%s — Mohammed Salih',
  },
  description,
  applicationName: 'Mohammed Salih Portfolio',
  authors: [{ name: 'Mohammed Salih S A' }],
  openGraph: {
    type: 'website',
    title: 'Mohammed Salih S A — Software Developer',
    description,
  },
  twitter: {
    card: 'summary',
    title: 'Mohammed Salih S A — Software Developer',
    description,
  },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090c12',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="ambient-background" aria-hidden="true"><span className="ambient-cloud ambient-cloud--amber" /><span className="ambient-cloud ambient-cloud--teal" /><span className="ambient-cloud ambient-cloud--rose" /></div>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
