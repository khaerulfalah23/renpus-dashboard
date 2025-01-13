'use client';

import { DataTableSearch } from '@/components/ui/table/data-table-search';
import { useCategoryTableFilters } from './use-category-table-filters';

export default function CategoryTableAction() {
  const { searchQuery, setPage, setSearchQuery } = useCategoryTableFilters();
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <DataTableSearch
        searchKey='category'
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
      />
    </div>
  );
}
