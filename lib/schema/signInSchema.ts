import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).trim(),
});

export type TSignInForm = z.infer<typeof SignInFormSchema>;
