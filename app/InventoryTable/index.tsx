// @ts-nocheck

'use client';

import { Suspense } from 'react';
import { useReadQuery, useBackgroundQuery, useMutation } from '@apollo/client';

// TODO: components/ui
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { formatDateToLocal } from '@/app/lib/utils';

import {
  GetInventoryDocument,
  GetProductsDocument,
  UpdateItemQuantityDocument,
} from '@/app/InventoryTable/documents.generated';

import Search from '@/app/ui/search';
import Pagination from '@/app/ui/pagination';
import Link from 'next/link';
import AddItemForm from '@/app/ui/add-item-form';
import ItemActionButtons from '@/app/ui/item-action-buttons';

export default function InventoryItemsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const userId = 1;

  const [inventoryQueryRef] = useBackgroundQuery(GetInventoryDocument);
  const [productQueryRef] = useBackgroundQuery(GetProductsDocument);
  const { data: inventory, error } = useReadQuery(inventoryQueryRef);
  const { data: productsData } = useReadQuery(productQueryRef);
  const { products } = productsData;
  const [updateItemQuantity, { data, loading, error: updateError }] = useMutation(UpdateItemQuantityDocument);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="flex w-full flex-col gap-6 rounded-sm  bg-coconut p-2">
        <div className="mt-2 flex flex-col justify-between gap-2">
          <Search placeholder="Search inventory..." />
        </div>
        <table className="hidden w-full text-licorice md:table">
          <thead className="rounded-sm text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Product
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Expiration Date
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="bg-coconut">
            {inventory.inventoryItems?.map((inventoryItem) => {
              const url = `/products/${inventoryItem?.product.id}`;
              return (
                <tr
                  key={inventoryItem?.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-sm [&:first-child>td:last-child]:rounded-tr-sm [&:last-child>td:first-child]:rounded-bl-sm [&:last-child>td:last-child]:rounded-br-sm"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-2">
                      <p>
                        <Link
                          className="flex flex-row items-center gap-1 text-bloodorange hover:text-smashedPumpkin"
                          href={url}
                        >
                          {inventoryItem?.product.name}{' '}
                          <FontAwesomeIcon icon={faLink} className="w-4" />
                        </Link>
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {inventoryItem?.expirationDate}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <ItemActionButtons
                      id={parseInt(inventoryItem?.id, 10)}
                      quantity={inventoryItem?.quantity}
                      updateItemQuantity={updateItemQuantity}
                      unit={inventoryItem.unit}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination totalPages={1} />
        {products && <AddItemForm userId={userId} products={products} />}
      </div>
    </Suspense>
  );
}
