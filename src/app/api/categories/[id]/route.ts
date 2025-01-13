import Response from '@/lib/api-response';
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  try {
    const body = await req.json();

    if (!body.category || typeof body.category !== 'string') {
      return Response({
        message: 'Category name is required and must be a string',
        status: 400,
      });
    }

    const existingCategory = await prisma.category.findUnique({
      where: { category: body.category },
    });

    if (existingCategory && existingCategory.id !== id) {
      return Response({
        message: 'Category name already exists',
        status: 400,
      });
    }

    const updatedCategory = await prisma.category.update({
      where: { id },
      data: { category: body.category },
    });

    return Response({
      message: 'Category updated successfully',
      data: updatedCategory,
      status: 200,
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to update category',
      data: error.message,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest, { params }: { params: any }) {
  try {
    const { id } = params;
    const existingCategory = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    if (!existingCategory) {
      return Response({
        message: 'Category not found',
        status: 404,
      });
    }
    await prisma.category.delete({
      where: {
        id,
      },
    });
    return Response({
      message: 'Category deleted successfully',
      status: 200,
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to delete category',
      data: error,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
