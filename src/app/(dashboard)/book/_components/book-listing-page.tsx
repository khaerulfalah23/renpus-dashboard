import prisma from '@/lib/prisma';
import { searchParamsCache } from '@/lib/searchparams';
import { columns } from './book-tables/columns';
import { DataTable as BookTable } from '@/components/ui/table/data-table';

export default async function BookListingPage() {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  const category = searchParamsCache.get('category');
  const categoryArray = category ? category.split('.') : [];

  const whereClause = {
    ...(search && {
      OR: [
        { title: { contains: search } },
        { author: { contains: search } },
        { publisher: { contains: search } },
        { isbn: { contains: search } },
      ],
    }),
    ...(categoryArray.length > 0 && {
      Category: { category: { in: categoryArray } },
    }),
  };

  const books = await prisma.book.findMany({
    where: whereClause,
    skip: (page - 1) * pageLimit,
    take: pageLimit,
    include: {
      Category: true,
    },
  });

  const totalData = await prisma.book.count({
    where: whereClause,
  });

  return <BookTable columns={columns} data={books} totalItems={totalData} />;
}
