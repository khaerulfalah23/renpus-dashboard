import Response from '@/lib/api-response';
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: any }) {
  try {
    const { id } = params;
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
    });
    return Response({
      message: 'Get book successfully',
      data: book,
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to get book',
      data: error,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  try {
    const body = await req.json();

    const existingBook = await prisma.book.findUnique({
      where: {
        title: body.title,
      },
    });

    if (existingBook && existingBook.id !== id) {
      return Response({
        message: 'Book title already exists',
        status: 400,
      });
    }

    const updatedBook = await prisma.book.update({
      where: { id },
      data: {
        ...body,
        publicationYear: new Date(body.publicationYear),
      },
    });

    return Response({
      message: 'Book updated successfully',
      data: updatedBook,
      status: 200,
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to update book',
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
    const existingBook = await prisma.book.findUnique({
      where: {
        id,
      },
    });
    if (!existingBook) {
      return Response({
        message: 'Book not found',
        status: 404,
      });
    }
    await prisma.book.delete({
      where: {
        id,
      },
    });
    return Response({
      message: 'Book deleted successfully',
      status: 200,
    });
  } catch (error: any) {
    return Response({
      message: 'Failed to delete book',
      data: error,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
