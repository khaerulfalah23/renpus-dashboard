'use client';
import Image from 'next/image';
import { format } from 'date-fns';
import { bookItem } from '@/types';
import { id } from 'date-fns/locale';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<bookItem>[] = [
  {
    accessorKey: 'image',
    header: 'IMAGE',
    cell: ({ row }) => {
      return (
        <div className='relative aspect-square w-16 h-16'>
          <Image
            src={row?.original?.image}
            alt={row?.original?.title}
            fill
            className='rounded-lg object-cover'
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'TITLE',
  },
  {
    accessorKey: 'Category.category',
    header: 'CATEGORY',
    cell: ({ row }) => <span>{row?.original?.Category?.category}</span>,
  },
  {
    accessorKey: 'author',
    header: 'AUTHOR',
  },
  {
    accessorKey: 'publisher',
    header: 'PUBLISHER',
  },
  {
    accessorKey: 'publicationYear',
    header: 'PUBLICATION YEAR',
    cell: ({ row }) => {
      const date = new Date(row.original.publicationYear);
      return <span>{format(date, 'dd MMMM yyyy', { locale: id })}</span>;
    },
  },
  {
    accessorKey: 'isbn',
    header: 'ISBN',
  },
  {
    accessorKey: 'borrowed',
    header: 'BORROWED',
  },
  {
    accessorKey: 'booked',
    header: 'BOOKED',
  },
  {
    accessorKey: 'stock',
    header: 'STOCK',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
