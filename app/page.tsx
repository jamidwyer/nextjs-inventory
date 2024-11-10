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
import { useRouter } from 'next/navigation';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    sort?: string;
    sortDirection?: string;
  };
}) {
  const router = useRouter();

  const {
    data: inventory,
    loading: inventoryLoading,
    error,
    refetch,
    fetchMore,
  } = useQuery(GetInventoryDocument, { variables: { cursor: '' } });

  const [showScanner, setShowScanner] = useState(false);
  const [scannedProduct, setScannedProduct] = useState();

  if (inventoryLoading) {
    return <Loading />;
  }

  if (error) {
    if (
      error.graphQLErrors[0]?.message ===
      'You do not have permission to perform this action'
    ) {
      router.push('/login');
    }
    return <Error error={error} />;
  }

  if (!inventoryLoading && !inventory?.inventoryItems) {
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

  return (
    <>
      <Section name="Inventory">
        <InventoryItemsTable
          // @ts-ignore
          inventoryItems={inventory?.inventoryItems}
          loadMore={fetchMore}
          // @ts-ignore
          pageInfo={inventory.inventoryItems.pageInfo}
        />
      </Section>
      <Section name="Add Inventory Item">
        <AddItemForm
          // @ts-ignore
          userId={inventory.me?.id}
          onAddItem={refetch}
        />
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
        <LinkButton href="/product/add" className="w-[200px]" variant="normal">
          Add Product
        </LinkButton>
      </Section>
    </>
  );
}
