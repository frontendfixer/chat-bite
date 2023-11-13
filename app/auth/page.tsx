import { Image } from '@nextui-org/react';
import NextImage from 'next/image';

import { AuthForm, SocialLogin } from '@/components';

const Auth = () => {
  return (
    <main className="grid h-screen items-center">
      <div className="mx-auto">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Image
            as={NextImage}
            width={48}
            height={48}
            src="/logo.svg"
            alt=""
            aria-hidden
          />
          <h1 className="text-4xl font-extrabold uppercase text-primary-400">
            Chat bite
          </h1>
        </div>
        <SocialLogin />
        <div className="mx-auto">
          <div className="relative mt-8 border-t-2 border-primary-300">
            <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background px-4">
              Or login with
            </p>
            <div className="mt-6">
              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
