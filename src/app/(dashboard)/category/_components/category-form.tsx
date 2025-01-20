'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateCategory } from '@/features/category/useCreateCategory';
import { useUpdateCategory } from '@/features/category/useUpdateCategory';
import { CategoryCredential, TCategoryCredential } from '@/lib/form-schema';
import { categoryItem } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function CategoryForm({
  initialData,
  pageTitle,
}: {
  initialData: categoryItem | null;
  pageTitle: string;
}) {
  const form = useForm<TCategoryCredential>({
    resolver: zodResolver(CategoryCredential),
    defaultValues: {
      category: initialData?.category || '',
    },
  });
  const { mutate: create, isPending: isPendingCreate } = useCreateCategory();
  const { mutate: update, isPending: isPendingUpdate } = useUpdateCategory();
  const onSubmit = (val: TCategoryCredential) => {
    if (initialData) {
      update({ id: initialData.id, body: val });
    } else {
      create(val);
    }
  };
  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {pageTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter category name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isPendingCreate || isPendingUpdate} type='submit'>
              {isPendingCreate || isPendingUpdate ? (
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              ) : null}
              {initialData ? 'Update Category' : 'Add Category'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
