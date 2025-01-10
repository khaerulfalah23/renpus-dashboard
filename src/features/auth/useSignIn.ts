import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { TSignInCredential } from '@/lib/form-schema';

export function useSignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  return useMutation({
    mutationFn: async (body: TSignInCredential) => {
      const signInResponse = await signIn('credentials', {
        ...body,
        callbackUrl: searchParams.get('callbackUrl') || '/',
        redirect: false,
      });
      if (signInResponse?.error) {
        throw new Error(signInResponse.error);
      }
      return signInResponse;
    },
    onSuccess: (res) => {
      toast.success('Sign in successfully');
      router.push(res?.url || '/');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
