import { notFound } from 'next/navigation';
import CategoryForm from './category-form';
import prisma from '@/lib/prisma';

type TCategoryViewPageProps = {
  categoryId: string;
};

export default async function CategoryViewPage({
  categoryId,
}: TCategoryViewPageProps) {
  let category = null;
  let pageTitle = 'Create New Category';

  if (categoryId !== 'new') {
    const data = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });
    category = data;
    if (!category) {
      notFound();
    }
    pageTitle = `Edit Category`;
  }

  return <CategoryForm initialData={category} pageTitle={pageTitle} />;
}
