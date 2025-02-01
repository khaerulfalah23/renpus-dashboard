import { Suspense } from 'react';
import PageContainer from '@/components/common/page-container';
import FormCardSkeleton from '@/components/form-card-skeleton';
import BookViewPage from '../_components/book-view-page';

export const metadata = {
  title: 'Dashboard : Book Form',
};

type PageProps = { params: Promise<{ bookId: string }> };

export default async function BookFormPage(props: PageProps) {
  const params = await props.params;
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <BookViewPage bookId={params.bookId} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
