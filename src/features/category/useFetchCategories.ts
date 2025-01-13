import { axiosInstance } from '@/lib/axios';
import BaseResponse, { categoryItem } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface categoriesResponse extends BaseResponse {
  data: {
    data: categoryItem[];
    total: number;
  };
}

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<categoriesResponse> => {
      const { data } = await axiosInstance.get('/categories');
      return data;
    },
  });
};
