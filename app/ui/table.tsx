import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { formatDateToLocal } from '@/app/lib/utils';
import {
  fetchInventoryItems,
  fetchInventoryItemsPages,
  fetchProducts,
} from '@/app/lib/data';
import Search from './search';
import Pagination from './pagination';
import Link from 'next/link';
import AddItemForm from './add-item-form';
import InventoryItemButtons from './inventory-item-buttons';

export default async function InventoryItemsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const userId = 1;
  const inventoryItems = await fetchInventoryItems(userId, query, currentPage);

  const totalPages = await fetchInventoryItemsPages(userId, query, currentPage);

  const products = await fetchProducts();

  return (
    <div className="flex w-full flex-col gap-6 rounded-sm  bg-coconut p-2">
      <div className="mt-2 flex flex-col justify-between gap-2">
        <Search placeholder="Search inventory..." />
      </div>
      <div className="md:hidden">
        {inventoryItems?.map((inventoryItem) => {
          return (
            <div
              key={inventoryItem.id}
              className="mb-2 w-full rounded-sm bg-coconut p-4"
            >
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="text-xl font-medium">{inventoryItem.amount}</p>
                  <p>{formatDateToLocal(inventoryItem.expiration_date)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <table className="hidden w-full text-licorice md:table">
        <thead className="rounded-sm text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Product
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Expiration Date
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-coconut">
          {inventoryItems?.map((inventoryItem) => {
            const url = `/products/${inventoryItem.product_id}`;
            return (
              <tr
                key={inventoryItem.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-sm [&:first-child>td:last-child]:rounded-tr-sm [&:last-child>td:first-child]:rounded-bl-sm [&:last-child>td:last-child]:rounded-br-sm"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-2">
                    <p>
                      <Link
                        className="flex flex-row items-center gap-1 text-bloodorange hover:text-smashedPumpkin"
                        href={url}
                      >
                        {inventoryItem.name}{' '}
                        <FontAwesomeIcon icon={faLink} className="w-4" />
                      </Link>
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {inventoryItem.amount}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {formatDateToLocal(inventoryItem.expiration_date)}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <InventoryItemButtons
                    id={inventoryItem.id}
                    amount={inventoryItem.amount}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} />
      <AddItemForm userId={userId} products={products} />
    </div>
  );
}
