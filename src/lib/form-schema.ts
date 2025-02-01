import { z } from 'zod';

export const SignInCredential = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  password: z.string().nonempty('Password is required'),
});

export type TSignInCredential = z.infer<typeof SignInCredential>;

export const CategoryCredential = z.object({
  category: z.string().nonempty('Category name is required'),
});

export type TCategoryCredential = z.infer<typeof CategoryCredential>;

export const BookCredential = z.object({
  image: z
    .any()
    .refine((files) => files !== null && files !== undefined && files !== '', {
      message: 'Image is required',
    }),
  title: z.string().nonempty('Book title is required'),
  author: z.string().nonempty('Author name is required'),
  publisher: z.string().nonempty('Publisher name is required'),
  publicationYear: z.coerce.date({
    required_error: 'Publication date is required',
    invalid_type_error: 'Invalid date format',
  }),
  isbn: z.string().nonempty('ISBN is required'),
  categoryId: z.string().nonempty('Category is required'),
  stock: z.coerce.number().min(1, 'Stock must be at least 1'),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
});

export type TBookCredential = z.infer<typeof BookCredential>;
