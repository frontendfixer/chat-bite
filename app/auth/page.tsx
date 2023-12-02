import { Image } from '@nextui-org/react';
import { type Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';

import { AuthForm, SocialLogin } from '@/components';
import { titleCase } from '@/lib/helper';

type Props = {
  searchParams: { [key: string]: string };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const type = searchParams?.type;
  return {
    title: `${type ? titleCase(type) : 'Authentication'} - Chat Bite`,
  };
}

const Auth = async () => {
  return (
    <div className="mx-auto rounded-xl bg-gray-100/10 px-8 py-5 shadow-[0_0_20px_10px] shadow-black/40 backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-center gap-3">
        <Link href="/">
          <Image
            as={NextImage}
            width={48}
            height={48}
            src="/logo.svg"
            alt=""
            aria-hidden
          />
        </Link>
        <h1 className="text-4xl font-extrabold uppercase text-primary-400">
          Chat bite
        </h1>
      </div>
      <SocialLogin />
      <div className="mx-auto">
        <div className="relative mt-8 border-t-2 border-primary-300">
          <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200 px-4 text-black">
            Or login with
          </p>
          <div className="mt-6">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
