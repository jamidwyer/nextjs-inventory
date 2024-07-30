import InventoryItemsTable from '@/app/InventoryTable';
import PageUI from '@/app/ui/pageui';
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
    <PageUI>
      <InventoryItemsTable currentPage={currentPage} query={query} />
    </PageUI>
  );
}
