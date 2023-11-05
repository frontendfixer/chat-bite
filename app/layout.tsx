import './globals.css';

import type { Metadata } from 'next';

import { signikaNegative } from '@/config/fonts';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Chat Bite | Real Time Chat App',
  description: 'Real Time Chat App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-foreground bg-background">
      <body className={signikaNegative.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
