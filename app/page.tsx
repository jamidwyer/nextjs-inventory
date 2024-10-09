'use client';

import InventoryItemsTable from '@/app/components/inventory-table';
import { Scanner } from '@yudiel/react-qr-scanner';
import { SetStateAction, useState } from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { Button } from './components/button';
import AddItemForm from './components/add-item-form';
import { Section } from './components/section';
import { GetInventoryDocument } from './components/inventory-table/documents.generated';
import Error from '@/app/error';
import Loading from './loading';
import Pagination from './components/pagination';

const OPEN_FOOD_FACTS_API_URL = "https://world.openfoodfacts.org/api/v3/product/";

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
  } = useQuery(GetInventoryDocument, {variables: {cursor: ''}});

  const [showScanner, setShowScanner] = useState(false);
  const [scannedProductName, setScannedProductName] = useState('');
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const handleBarcode = async (result: { rawValue: SetStateAction<string | undefined>; }[]) => {
    const data = await fetch(`${OPEN_FOOD_FACTS_API_URL}${result[0].rawValue}`);
    const json = await data.json();
    setScannedProductName(json.product.product_name);
  }

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
        {scannedProductName !== '' ? `Scanned: ${scannedProductName}` : null}
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
            onScan={(result) => handleBarcode(result)}
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
