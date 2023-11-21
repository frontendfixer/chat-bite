import '@/styles/globals.css';
import '@/styles/ReactToastify.css';

import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

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
    <html
      lang="en"
      className="bg-background text-foreground dark"
      suppressHydrationWarning
    >
      <body className={signikaNegative.className}>
        <ToastContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
