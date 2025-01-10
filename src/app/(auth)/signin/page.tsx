import { Metadata } from 'next';
import SignInView from './_components/signin-view';

export const metadata: Metadata = {
  title: 'Renpus Login',
  description:
    'Log in to your Renpus account to reserve books and manage your library activities conveniently.',
};

export default function SignIn() {
  return <SignInView />;
}
