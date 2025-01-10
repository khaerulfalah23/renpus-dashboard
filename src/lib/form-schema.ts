import { z } from 'zod';

export const SignInCredential = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  password: z.string().nonempty('Password is required'),
});

export type TSignInCredential = z.infer<typeof SignInCredential>;
