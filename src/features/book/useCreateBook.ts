import { supabaseUploadFile } from '@/lib/supabase';
import { TBookCredential } from '@/lib/form-schema';
import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useCreateBook() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (body: TBookCredential) => {
      const uploadImg = await supabaseUploadFile(body.image, 'book');
      const fileName = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/book/${uploadImg.fileName}`;
      const bookResponse = await axiosInstance.post('/books', {
        ...body,
        image: fileName,
      });
      return bookResponse;
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      router.push('/book');
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
