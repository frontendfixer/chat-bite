'use client';

import { Button } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { SignInForm } from './signInForm';
import { SignUpForm } from './SignUpForm';

export const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const variant = {
    initial: { opacity: 0, scale: 0.5, height: 0 },
    animate: { opacity: 1, scale: 1, height: 'auto' },
    exit: { opacity: 0, scale: 0, height: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {isSignUp ? (
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
        ) : (
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
          {isSignUp ? "Don't have an account?" : 'Already have an account?'}
        </p>
        <Button
          onPress={() => setIsSignUp(!isSignUp)}
          variant="light"
          color={isSignUp ? 'success' : 'danger'}
        >
          {isSignUp ? 'Create an account' : 'Back to login'}
        </Button>
      </div>
    </>
  );
};
