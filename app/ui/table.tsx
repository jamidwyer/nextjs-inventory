import {
  IncrementInventoryItem,
  DecrementInventoryItem,
  AddInventoryItem,
} from '@/app/ui/buttons';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchInventoryItems } from '@/app/lib/data';
import Search from './search';

export default async function InventoryItemsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const userId = '410544b2-4001-4271-9855-fec4b6a6442a';
  const inventoryItems = await fetchInventoryItems(userId);

  console.log(inventoryItems);

  return (
    <div className="rounded-sm bg-gray-50 p-2 md:pt-0">
      <div className="mt-2 flex flex-col justify-between gap-2">
        <Search placeholder="Search inventory..." />
      </div>

      <div className="md:hidden">
        {inventoryItems?.map((inventoryitem) => (
          <div
            key={inventoryitem.id}
            className="mb-2 w-full rounded-md bg-coconut p-4"
          >
            <div className="flex w-full items-center justify-between pt-4">
              <div>
                <p className="text-xl font-medium">{inventoryitem.amount}</p>
                <p>{inventoryitem.expiration_date}</p>
              </div>
              <div className="flex justify-end gap-2">
                <IncrementInventoryItem id={inventoryitem.id} />
                <DecrementInventoryItem id={inventoryitem.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <table className="hidden text-licorice md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
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
          {inventoryItems?.map((inventoryitem) => (
            <tr
              key={inventoryitem.id}
              className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                  <p>{inventoryitem.name}</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                {inventoryitem.amount}
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                {inventoryitem.expiration_date}
              </td>
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                  <IncrementInventoryItem id={inventoryitem.id} />
                  <DecrementInventoryItem id={inventoryitem.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddInventoryItem />
    </div>
  );
}
