import { TCategoryCredential } from '@/lib/form-schema';
import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useCreateCategory() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (body: TCategoryCredential) => {
      const categoryResponse = await axiosInstance.post('/categories', body);
      return categoryResponse;
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
