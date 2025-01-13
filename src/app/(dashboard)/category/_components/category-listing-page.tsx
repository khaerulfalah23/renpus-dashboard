import prisma from '@/lib/prisma';
import { searchParamsCache } from '@/lib/searchparams';
import { columns } from './category-tables/columns';
import { DataTable as CategoryTable } from '@/components/ui/table/data-table';

export default async function CategoryListingPage() {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');

  const whereClause = {
    ...(search && {
      category: { contains: search },
    }),
  };

  const categories = await prisma.category.findMany({
    where: whereClause,
    skip: (page - 1) * pageLimit,
    take: pageLimit,
  });

  const totalData = await prisma.category.count({
    where: whereClause,
  });

  return (
    <CategoryTable columns={columns} data={categories} totalItems={totalData} />
  );
}
