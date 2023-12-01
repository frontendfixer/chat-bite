'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff, LuMail } from 'react-icons/lu';
import { toast } from 'react-toastify';

import { toastOptions } from '@/lib/ReactToastify';
import { SignUpFormSchema, type TSignUpForm } from '@/lib/schema';

export type SignUpDataT = {
  element: 'email' | 'password' | 'confirmPassword';
  type: string;
  data: { id: string; user: string; email: string };
  message: string;
  success: boolean;
};

export function SignUpForm() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<TSignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = async (value: TSignUpForm) => {
    setIsLoading(true);
    const { data }: { data: SignUpDataT } = await axios.post(
      'api/registration',
      value,
    );
    setIsLoading(false);
    if (!data.success) {
      toast.error(data.message, toastOptions);
      return setError(data?.element, {
        type: data.type,
        message: data.message,
      });
    }

    toast.success(data.message, toastOptions);
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
        endContent={<LuMail className="text-gray-500" />}
        {...register('email')}
      />
      <Input
        label="Password"
        size="md"
        radius="sm"
        variant="bordered"
        color={errors?.password ? 'danger' : 'primary'}
        type="password"
        isInvalid={errors?.password ? true : false}
        errorMessage={errors?.password?.message}
        className="mt-4"
        {...register('password')}
      />
      <Input
        label="Confirm Password"
        size="md"
        radius="sm"
        variant="bordered"
        color={errors?.confirmPassword ? 'danger' : 'primary'}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <LuEye className="pointer-events-none text-gray-500" />
            ) : (
              <LuEyeOff className="pointer-events-none text-gray-500" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        isInvalid={errors?.confirmPassword ? true : false}
        errorMessage={errors?.confirmPassword?.message}
        className="mt-4"
        {...register('confirmPassword')}
      />
      <Button
        type="submit"
        radius="sm"
        className="mt-5 w-full font-semibold"
        isLoading={isLoading}
      >
        Submit
      </Button>
    </form>
  );
}
