'use client';

import InventoryItemsTable from '@/app/components/inventory-table';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import AddItemForm from './components/add-item-form';
import { Section } from './components/section';
import { GetInventoryDocument } from './components/inventory-table/documents.generated';
import Error from '@/app/error';
import Loading from './components/loading';
import BarcodeScanner from './components/barcode-scanner';
import LinkButton from './components/link-button';

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
  } = useQuery(GetInventoryDocument, { variables: { cursor: '' } });

  const [showScanner, setShowScanner] = useState(false);
  const [scannedProduct, setScannedProduct] = useState();
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
      </Section>
      <Section name="Add Inventory Item">
        <AddItemForm userId={1} onAddItem={refetch} />
      </Section>
      <Section name="Scan Barcode">
        <BarcodeScanner
          scannedProduct={scannedProduct}
          setScannedProduct={setScannedProduct}
          setShowScanner={setShowScanner}
          showScanner={showScanner}
        />
      </Section>
      <Section name="Add Product">
        <LinkButton
          href="http://localhost/admin/inventory/product/add/"
          className="w-[200px]"
          variant="normal"
        >
          Add Product
        </LinkButton>
      </Section>
    </>
  );
}
