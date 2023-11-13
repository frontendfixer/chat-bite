'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff, LuMail } from 'react-icons/lu';
import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).trim(),
});

type TSignInForm = z.infer<typeof SignInFormSchema>;

export function SignInForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit = (data: TSignInForm) => {
    console.log(data);
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
        errorMessage={errors?.email?.message}
        endContent={<LuMail className="text-primary-200" />}
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
              <LuEye className="pointer-events-none text-primary-200" />
            ) : (
              <LuEyeOff className="pointer-events-none text-primary-200" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        errorMessage={errors?.password?.message}
        className="mt-4"
        {...register('password')}
      />
      <Button
        type="submit"
        radius="sm"
        color="secondary"
        className="mt-5 w-full font-semibold"
      >
        Log in
      </Button>
    </form>
  );
}
