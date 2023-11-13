'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff, LuMail } from 'react-icons/lu';
import { z } from 'zod';

export const SignUpFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).trim(),
    confirmPassword: z.string(),
  })
  .refine(data => data.confirmPassword === data.password, {
    message: "Password doesn't match",
    path: ['confirmPassword'],
  });

type TSignUpForm = z.infer<typeof SignUpFormSchema>;

export function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = (data: TSignUpForm) => {
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
              <LuEye className="pointer-events-none text-primary-200" />
            ) : (
              <LuEyeOff className="pointer-events-none text-primary-200" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        errorMessage={errors?.confirmPassword?.message}
        className="mt-4"
        {...register('confirmPassword')}
      />
      <Button
        type="submit"
        radius="sm"
        className="mt-5 w-full font-semibold"
      >
        Submit
      </Button>
    </form>
  );
}
