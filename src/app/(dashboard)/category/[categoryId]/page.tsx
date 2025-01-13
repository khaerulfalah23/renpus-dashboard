import PageContainer from '@/components/common/page-container';
import FormCardSkeleton from '@/components/form-card-skeleton';
import CategoryViewPage from '../_components/category-view-page';
import { Suspense } from 'react';

export const metadata = {
  title: 'Dashboard : Category Form',
};

type PageProps = { params: Promise<{ categoryId: string }> };

export default async function CategoryFormPage(props: PageProps) {
  const params = await props.params;
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <CategoryViewPage categoryId={params.categoryId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
