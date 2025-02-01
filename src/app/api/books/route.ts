import Response from '@/lib/api-response';
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const title = body.title;

    const existingTitle = await prisma.book.findUnique({
      where: {
        title,
      },
    });

    if (existingTitle) {
      return Response({
        message: 'Book title already exists',
        status: 400,
      });
    }

    const newBody = {
      ...body,
      publicationYear: new Date(body.publicationYear),
    };

    const newBook = await prisma.book.create({
      data: newBody,
    });

    return Response({
      message: 'Book created successfully',
      data: newBook,
      status: 201,
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to create book',
      data: error,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
