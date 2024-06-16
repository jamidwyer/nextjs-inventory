import InventoryItemsTable from '@/app/ui/table';
import { Suspense } from 'react';
import { AddInventoryItem } from './ui/buttons';
import Search from './ui/search';

export default function Page() {
  return (
    <>
      <Suspense>
        <InventoryItemsTable currentPage={1} query="" />
      </Suspense>
    </>
  );
}
