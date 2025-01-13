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
import CategoryTableAction from './_components/category-tables/category-table-action';
import CategoryListingPage from './_components/category-listing-page';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Category',
};

export default async function Category(props: pageProps) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);
  const key = serialize({ ...searchParams });
  return (
    <PageContainer>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title='Category' description='Manage categories' />
          <Link
            href='/category/new'
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className='mr-2 h-4 w-4' /> Add New
          </Link>
        </div>
        <Separator />
        <CategoryTableAction />
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <CategoryListingPage />
        </Suspense>
      </div>
    </PageContainer>
  );
}
