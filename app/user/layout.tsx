import { type Metadata } from 'next';

import { titleCase } from '@/lib/helper';
import { getServerAuthSession } from '@/server/auth';

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerAuthSession()!;
  return {
    title: titleCase(session?.user.name as string) + ' - Welcome ChatBite User',
  };
}

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default UserLayout;
