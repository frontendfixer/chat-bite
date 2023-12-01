'use client';

import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';

export const SocialLogin = () => {
  const [loading, setLoading] = useState(false);
  const [btnId, setBtnId] = useState('');

  const submitHandler = async (
    event: {
      target: {
        id: string;
      };
    },
    action: string,
  ) => {
    setLoading(true);
    setBtnId(event.target.id);
    return signIn(action, {
      callbackUrl: '/user',
    });
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        fullWidth
        aria-label="facebook login"
        className="bg-[#1877F2] text-base text-white"
        onPress={event => submitHandler(event, 'facebook')}
        isLoading={btnId === 'facebookBtn' && loading}
        id="facebookBtn"
      >
        <BsFacebook />
      </Button>
      <Button
        fullWidth
        aria-label="google login"
        className="bg-white text-base"
        onPress={event => submitHandler(event, 'google')}
        id="googleBtn"
        isLoading={btnId === 'googleBtn' && loading}
      >
        <BsGoogle />
      </Button>
      <Button
        fullWidth
        aria-label="github login"
        className="bg-black text-base text-white"
        onPress={event => submitHandler(event, 'github')}
        id="githubBtn"
        isLoading={btnId === 'githubBtn' && loading}
      >
        <BsGithub />
      </Button>
    </div>
  );
};
