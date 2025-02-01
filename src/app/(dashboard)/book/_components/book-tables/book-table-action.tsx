'use client';

import { DataTableFilterBox } from '@/components/ui/table/data-table-filter-box';
import { DataTableResetFilter } from '@/components/ui/table/data-table-reset-filter';
import { DataTableSearch } from '@/components/ui/table/data-table-search';
import { useBookTableFilters } from './use-book-table-filter';
import { useFetchCategories } from '@/features/category/useFetchCategories';
import { categoryItem } from '@/types';

export default function BookTableAction() {
  const { data: res, isPending } = useFetchCategories();
  const CATEGORY_OPTIONS =
    (res?.data?.data as categoryItem[])?.map((categories: categoryItem) => ({
      value: categories.category,
      label: categories.category,
    })) || [];
  const {
    categoriesFilter,
    setCategoriesFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
  } = useBookTableFilters();
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <DataTableSearch
        searchKey='title'
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
      />
      <DataTableFilterBox
        filterKey='categories'
        title='Categories'
        options={CATEGORY_OPTIONS}
        setFilterValue={setCategoriesFilter}
        filterValue={categoriesFilter}
      />
      {/* <DataTableResetFilter
        isFilterActive={isAnyFilterActive}
        onReset={resetFilters}
      /> */}
    </div>
  );
}
