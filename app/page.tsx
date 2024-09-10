import InventoryItemsTable from '@/app/components/inventory-table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory',
  description: 'Food resource availability.',
};

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
    <InventoryItemsTable currentPage={currentPage} query={query} />
  );
}
