import Response from '@/lib/api-response';
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET() {
  try {
    const totalCategories = await prisma.category.count({});
    const categories = await prisma.category.findMany({});

    return Response({
      message: 'Get all categories successfully',
      data: {
        total: totalCategories,
        data: categories,
      },
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to get products',
      data: error,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const category = body.category;

    const existingCategory = await prisma.category.findUnique({
      where: {
        category,
      },
    });

    if (existingCategory) {
      return Response({
        message: 'Category name already exists',
        status: 400,
      });
    }

    const newCategory = await prisma.category.create({
      data: {
        category,
      },
    });

    return Response({
      message: 'Category created successfully',
      data: newCategory,
      status: 201,
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to create category',
      data: error,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
