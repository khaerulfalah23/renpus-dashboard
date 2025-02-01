import { axiosInstance } from '@/lib/axios';
import { supabaseDeleteFile } from '@/lib/supabase';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useDeleteBook() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data: detail } = await axiosInstance.get(`/books/${id}`);
      await supabaseDeleteFile(detail?.data?.image.split('/').pop(), 'book');
      const response = await axiosInstance.delete(`/books/${id}`);
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
