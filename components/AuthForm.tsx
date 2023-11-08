'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';

import { SignInForm } from './signInForm';
import { SignUpForm } from './SignUpForm';

export const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      {isSignUp ? <SignInForm /> : <SignUpForm />}
      <div className="flex items-center justify-between gap-5">
        <p className="text-small">
          {isSignUp ? "Don't have an account?" : 'Already have an account?'}
        </p>
        <Button
          onPress={() => setIsSignUp(!isSignUp)}
          variant="light"
          color={isSignUp ? 'success' : 'danger'}>
          {isSignUp ? 'Create an account' : 'Back to login'}
        </Button>
      </div>
    </>
  );
};
