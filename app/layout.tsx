import '@/styles/globals.css';
import '@/styles/ReactToastify.css';

import type { Metadata } from 'next';
import { type Session } from 'next-auth';
import { ToastContainer } from 'react-toastify';

import { signikaNegative } from '@/config/fonts';
import { getServerAuthSession } from '@/server/auth';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Chat Bite | Real Time Chat App',
  description: 'Real Time Chat App',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerAuthSession()) as Session;
  return (
    <html
      lang="en"
      className="bg-background text-foreground dark"
      suppressHydrationWarning
    >
      <body className={signikaNegative.className}>
        <ToastContainer />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
