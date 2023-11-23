'use client';

import { Button } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SignInForm } from './signInForm';
import { SignUpForm } from './SignUpForm';

export const AuthForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const type = useSearchParams().get('type');
  const [typeUrl, setTypeUrl] = useState(type ? type : 'signin');

  const variant = {
    initial: { opacity: 0, scale: 0.5, height: 0 },
    animate: { opacity: 1, scale: 1, height: 'auto' },
    exit: { opacity: 0, scale: 0, height: 0 },
  };

  const handelClick = () =>
    typeUrl === 'signin' ? setTypeUrl('signup') : setTypeUrl('signin');

  useEffect(() => {
    const url = `${pathname}?type=${typeUrl}`;
    router.push(url);
  }, [pathname, router, typeUrl]);

  return (
    <>
      <AnimatePresence>
        {typeUrl === 'signin' && (
          <motion.div
            layout
            key="signIn"
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.35 }}
            exit="exit"
          >
            <SignInForm />
          </motion.div>
        )}
        {typeUrl === 'signup' && (
          <motion.div
            layout
            key="signUp"
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.35 }}
            exit="exit"
          >
            <SignUpForm />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-between gap-5">
        <p className="text-small">
          {typeUrl === 'signin'
            ? "Don't have an account?"
            : 'Already have an account?'}
        </p>
        <Button
          onPress={handelClick}
          variant="light"
          disableAnimation
          color={typeUrl === 'signin' ? 'success' : 'danger'}
        >
          {typeUrl === 'signin' ? 'Create an account' : 'Back to login'}
        </Button>
      </div>
    </>
  );
};
