'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff, LuMail } from 'react-icons/lu';
import { toast } from 'react-toastify';

import { toastOptions } from '@/lib/ReactToastify';
import { SignInFormSchema, type TSignInForm } from '@/lib/schema';

export function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<TSignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit = async (data: TSignInForm) => {
    setIsLoading(true);
    const cb = await signIn('credentials', {
      redirect: false,
      ...data,
    });
    setIsLoading(false);

    if (!cb?.ok || cb?.error) {
      setError('password', {
        message: 'Invalid Credential!',
      });
      setError('email', {
        message: 'Invalid Credential!',
      });
      return toast.error('Invalid Credential!', toastOptions);
    }
    toast.success('Login Successful!', toastOptions);
    return router.push('/user');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-5"
    >
      <Input
        label="Email"
        size="md"
        radius="sm"
        variant="bordered"
        color={errors?.email ? 'danger' : 'primary'}
        isInvalid={errors?.email ? true : false}
        errorMessage={errors?.email?.message}
        endContent={<LuMail className="text-gray-600" />}
        {...register('email')}
      />
      <Input
        label="Password"
        size="md"
        radius="sm"
        variant="bordered"
        color={errors?.password ? 'danger' : 'primary'}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <LuEye className="pointer-events-none text-gray-600" />
            ) : (
              <LuEyeOff className="pointer-events-none text-gray-600" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        isInvalid={errors?.password ? true : false}
        errorMessage={errors?.password?.message}
        className="mt-4"
        {...register('password')}
      />
      <Button
        type="submit"
        radius="sm"
        color={!isLoading ? 'primary' : 'secondary'}
        isLoading={isLoading}
        className="mt-5 w-full font-semibold"
      >
        Log in
      </Button>
    </form>
  );
}
