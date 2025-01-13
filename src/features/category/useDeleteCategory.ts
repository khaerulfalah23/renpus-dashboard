import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useDeleteCategory() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstance.delete(`/categories/${id}`);
      return response;
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      router.refresh();
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
