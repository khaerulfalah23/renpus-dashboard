import { axiosInstance } from '@/lib/axios';
import { TBookCredential } from '@/lib/form-schema';
import { supabaseDeleteFile, supabaseUploadFile } from '@/lib/supabase';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useUpdateBook() {
  const router = useRouter();
  return useMutation({
    mutationFn: async ({ id, body }: { id: string; body: TBookCredential }) => {
      try {
        if (body.image instanceof File) {
          const { data: oldData } = await axiosInstance.get(`/books/${id}`);

          if (oldData?.data?.image) {
            const oldImageUrl = new URL(oldData.data.image);
            const oldFileName = oldImageUrl.pathname.split('/').pop();

            if (oldFileName) {
              await supabaseDeleteFile(oldFileName, 'book');
            }
          }

          const uploadImg = await supabaseUploadFile(body.image, 'book');
          const fileName = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/book/${uploadImg.fileName}`;

          const bookResponse = await axiosInstance.patch(`/books/${id}`, {
            ...body,
            image: fileName,
          });

          return bookResponse;
        }

        return await axiosInstance.patch(`/books/${id}`, body);
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      router.push('/book');
    },
    onError: (error: any) => {
      toast.error(error.response.data.message || 'Something went wrong');
    },
  });
}
