'use client';

import { Button } from '@nextui-org/react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';

export const SocialLogin = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        fullWidth
        aria-label="facebook login"
        className="bg-[#1877F2] text-base text-white">
        <BsFacebook />
      </Button>
      <Button
        fullWidth
        aria-label="google login"
        className="bg-white text-base">
        <BsGoogle />
      </Button>
      <Button
        fullWidth
        aria-label="github login"
        className="bg-black text-base text-white">
        <BsGithub />
      </Button>
    </div>
  );
};
