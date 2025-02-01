'use client';

import { format } from 'date-fns';
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
import { useCreateBook } from '@/features/book/useCreateBook';
import { useFetchCategories } from '@/features/category/useFetchCategories';
import { useUpdateCategory } from '@/features/category/useUpdateCategory';
import { BookCredential, TBookCredential } from '@/lib/form-schema';
import { bookItem, categoryItem } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { CustomUpload } from '@/components/customUpload';
import { useUpdateBook } from '@/features/book/useUpdateBook';

export default function BookForm({
  initialData,
  pageTitle,
}: {
  initialData: bookItem | null;
  pageTitle: string;
}) {
  const form = useForm<TBookCredential>({
    resolver: zodResolver(BookCredential),
    defaultValues: {
      image: initialData?.image || '',
      title: initialData?.title || '',
      author: initialData?.author || '',
      publisher: initialData?.publisher || '',
      publicationYear: initialData?.publicationYear
        ? new Date(initialData.publicationYear)
        : undefined,
      isbn: initialData?.isbn || '',
      categoryId: initialData?.categoryId || '',
      stock:
        initialData?.stock && initialData.stock > 0 ? initialData.stock : 1,
      description: initialData?.description || '',
    },
  });
  const { data: res, isPending } = useFetchCategories();
  const { mutate: create, isPending: isPendingCreate } = useCreateBook();
  const { mutate: update, isPending: isPendingUpdate } = useUpdateBook();
  const onSubmit = (val: TBookCredential) => {
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
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <div className='space-y-6'>
                  <FormItem>
                    <FormControl>
                      <CustomUpload
                        form={form}
                        name='image'
                        initialImage={initialData?.image}
                      />
                    </FormControl>
                    <FormMessage className='text-center' />
                  </FormItem>
                </div>
              )}
            />
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your title' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='categoryId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select a category' />
                        </SelectTrigger>
                        <SelectContent>
                          {isPending ? (
                            <SelectItem value='1'>Loading...</SelectItem>
                          ) : (
                            res?.data?.data?.map((category: categoryItem) => (
                              <SelectItem
                                key={category.id}
                                value={String(category.id)}
                              >
                                {category.category}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='author'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your author' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='isbn'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='Enter your ISBN'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='stock'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='Enter your stock'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='publisher'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publisher</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your publisher' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter book description'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='publicationYear'
              render={({ field }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormLabel>Publication Year</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[250px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'dd MMM yyyy')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        fromYear={1900}
                        toYear={new Date().getFullYear()}
                        initialFocus
                        captionLayout='dropdown-buttons'
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPendingCreate || isPendingUpdate} type='submit'>
              {isPendingCreate || isPendingUpdate ? (
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              ) : null}
              {initialData ? 'Update Book' : 'Add Book'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
