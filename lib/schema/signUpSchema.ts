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

export type TSignUpForm = z.infer<typeof SignUpFormSchema>;
