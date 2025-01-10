'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSignIn } from '@/features/auth/useSignIn';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInCredential, TSignInCredential } from '@/lib/form-schema';
import { Loader2 } from 'lucide-react';

export default function SignInForm() {
  const form = useForm<TSignInCredential>({
    resolver: zodResolver(SignInCredential),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { mutate, isPending } = useSignIn();
  const onSubmit = (val: TSignInCredential) => {
    mutate(val);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-2'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='Enter your email...'
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your password...'
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} className='ml-auto w-full' type='submit'>
            {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Sign In
          </Button>
        </form>
      </Form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Lets sign in
          </span>
        </div>
      </div>
    </>
  );
}
