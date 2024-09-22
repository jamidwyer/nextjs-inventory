'use client';

import { useReadQuery, useBackgroundQuery, useQuery } from '@apollo/client';
import Link from 'next/link';

import {
  GetInventoryDocument,
  GetProductsDocument,
} from '@/app/components/inventory-table/documents.generated';

import Search from '@/app/components/search';
import Pagination from '@/app/components/pagination';
import AddItemForm from '@/app/components/add-item-form';
import Loading from '@/app/loading';
import Error from '@/app/error';
import InventoryRow from '../inventory-row';
import Th from '../th';

export default function InventoryItemsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const userId = 1;
  const totalPages = 0;

  const [productQueryRef] = useBackgroundQuery(GetProductsDocument);
  const {
    data: inventory,
    loading: inventoryLoading,
    error,
  } = useQuery(GetInventoryDocument);
  const { data: productsData } = useReadQuery(productQueryRef);
  const { products } = productsData;

  if (inventoryLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!inventory || !inventory.inventoryItems) {
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

  if (inventory.inventoryItems.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        No items found.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-sm bg-coconut p-2">
      <div className="mt-2 flex flex-col justify-between gap-2">
        <Search placeholder="Search inventory..." />
      </div>
      <table className="max-w-[980px] text-licorice">
        <thead className="rounded-sm text-left text-sm font-normal">
          <tr>
            <Th className="w-1/2">Product</Th>
            <Th className="w-1/4">Expires</Th>
            <Th className="w-1/4">Quantity</Th>
          </tr>
        </thead>
        <tbody className="bg-coconut">
          {inventory.inventoryItems.map((inventoryItem) => {
            if (!inventoryItem || !inventoryItem.id) {
              return null;
            }
            const { id, unit, product, quantity, expirationDate } =
              inventoryItem;
            return (
              // TODO: ProductType shouldn't have inventoryitemSet or require ingredientSet fields
              id && (
                <InventoryRow
                  id={id}
                  expirationDate={expirationDate}
                  // @ts-ignore
                  product={product}
                  key={id}
                  quantity={quantity}
                  // @ts-ignore
                  unit={unit}
                />
              )
            );
          })}
        </tbody>
      </table>
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
      {products ? <AddItemForm userId={userId} products={products} /> : null}
      <Link
        href="http://localhost/admin/inventory/product/add/"
        className="flex h-10 w-[200px] items-center justify-center whitespace-nowrap bg-bloodorange px-4 text-sm font-medium tracking-normal text-coconut transition-colors hover:bg-smashedPumpkin focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bloodorange active:bg-smashedPumpkin aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      >
        Add Product
      </Link>
    </div>
  );
}
