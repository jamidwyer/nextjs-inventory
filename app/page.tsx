'use client';

import InventoryItemsTable from '@/app/components/inventory-table';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { Button } from './components/button';
import AddItemForm from './components/add-item-form';
import { Section } from './components/section';
import { GetInventoryDocument } from './components/inventory-table/documents.generated';
import Error from '@/app/error';
import Loading from './loading';
import Pagination from './components/pagination';

// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Inventory',
//   description: 'Food resource availability.',
// };

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const userId = 1;
  const totalPages = 0;

  const {
    data: inventory,
    loading: inventoryLoading,
    error,
    refetch,
    fetchMore,
  } = useQuery(GetInventoryDocument);

  const [showScanner, setShowScanner] = useState(false);
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  if (inventoryLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!inventory?.inventoryItems) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-grapefruit">
          Unable to load inventory data. Please try again later.
        </p>
        <Error
          error={{
            name: 'Inventory Error',
            message: 'Inventory data is not available.',
          }}
        />
      </div>
    );
  }

  const { inventoryItems } = inventory;

  return (
    <>
      <Section name="Inventory">
        <InventoryItemsTable
          query={query}
          // @ts-ignore
          inventoryItems={inventoryItems}
          loadMore={fetchMore}
          pageInfo={inventory.inventoryItems.pageInfo}
        />
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </Section>
      <Section name="Add Inventory Item">
        <AddItemForm userId={1} onAddItem={refetch} />
      </Section>
      <Section name="Scan Barcode">
        <Button onClick={() => setShowScanner(!showScanner)}>
          {!showScanner ? 'Scan Barcode' : 'Hide Barcode Scanner'}
        </Button>
        {showScanner && (
          <Scanner
            formats={[
              'qr_code',
              'micro_qr_code',
              'rm_qr_code',
              'maxi_code',
              'pdf417',
              'aztec',
              'data_matrix',
              'matrix_codes',
              'dx_film_edge',
              'databar',
              'databar_expanded',
              'codabar',
              'code_39',
              'code_93',
              'code_128',
              'ean_8',
              'ean_13',
              'itf',
              'linear_codes',
              'upc_a',
              'upc_e',
            ]}
            allowMultiple={true}
            onError={(error) => console.log(error)}
            onScan={(result) => console.log(result)}
          />
        )}
      </Section>
      <Section name="Add Product">
        <Link
          href="http://localhost/admin/inventory/product/add/"
          className="flex h-10 w-[200px] items-center justify-center whitespace-nowrap bg-bloodorange px-4 text-sm font-medium tracking-normal text-coconut transition-colors hover:bg-smashedPumpkin focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bloodorange active:bg-smashedPumpkin aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Add Product
        </Link>
      </Section>
    </>
  );
}
