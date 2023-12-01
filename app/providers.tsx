'use client';

import { NextUIProvider } from '@nextui-org/react';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        enableSystem
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
