import Link from 'next/link';
import SignInForm from './signin-form';
import { Icons } from '@/components/icons';

export default function SignInView() {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-[url("/images/login.jpg")] bg-cover bg-center' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Icons.logo className='mr-2 w-10 h-10' />
        </div>
      </div>
      <div className='flex h-full items-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Login to your account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email and password below to log in
            </p>
          </div>
          <SignInForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking continue, you agree to our{' '}
            <Link
              href='#'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='#'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
