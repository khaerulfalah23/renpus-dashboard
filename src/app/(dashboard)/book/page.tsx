import Link from 'next/link';
import PageContainer from '@/components/common/page-container';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Heading } from '@/components/heading';
import { Suspense } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { buttonVariants } from '@/components/ui/button';
import { SearchParams } from 'nuqs';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import BookTableAction from './_components/book-tables/book-table-action';
import BookListingPage from './_components/book-listing-page';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Book',
};

export default async function Book(props: pageProps) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);
  const key = serialize({ ...searchParams });
  return (
    <PageContainer>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title='Book' description='Manage books' />
          <Link
            href='/book/new'
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className='mr-2 h-4 w-4' /> Add New
          </Link>
        </div>
        <Separator />
        <BookTableAction />
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <BookListingPage />
        </Suspense>
      </div>
    </PageContainer>
  );
}
