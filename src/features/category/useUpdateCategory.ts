import { axiosInstance } from '@/lib/axios';
import { TCategoryCredential } from '@/lib/form-schema';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useUpdateCategory() {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({
      id,
      body,
    }: {
      id: string;
      body: TCategoryCredential;
    }) => {
      const response = await axiosInstance.patch(`/categories/${id}`, body);
      return response;
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      router.push('/category');
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
