import InventoryItemsTable from '@/app/ui/table';
import { Suspense } from 'react';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <Suspense key={query + currentPage}>
        <InventoryItemsTable currentPage={currentPage} query={query} />
      </Suspense>
    </>
  );
}
