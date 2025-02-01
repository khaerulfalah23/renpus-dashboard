import prisma from '@/lib/prisma';
import BookForm from './book-form';
import { notFound } from 'next/navigation';

type TBookViewPageProps = {
  bookId: string;
};

export default async function BookViewPage({ bookId }: TBookViewPageProps) {
  let book = null;
  let pageTitle = 'Create New Book';

  if (bookId !== 'new') {
    const data = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
      include: {
        Category: true,
      },
    });
    book = data;
    if (!book) {
      notFound();
    }
    pageTitle = `Edit Book`;
  }

  return <BookForm initialData={book} pageTitle={pageTitle} />;
}
