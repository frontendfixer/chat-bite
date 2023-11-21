import { Image } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/server/auth';

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return redirect('/user/' + session.user.id);
  } else {
    return (
      <div className="flex h-screen items-center justify-center gap-4">
        <Image
          isBlurred
          width={240}
          src="/logo.svg"
          alt=""
          className="mx-auto"
        />
        <h1 className="text-9xl">Chat Bite</h1>
      </div>
    );
  }
};

export default Home;
