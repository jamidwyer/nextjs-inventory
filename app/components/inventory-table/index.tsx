'use client';

import Search from '@/app/components/search';
import InventoryRow from '../inventory-row';
import Th from '../th';
import { InventoryItemType } from '@/components/types.generated';

interface InventoryItemsTableProps {
  inventoryItems: InventoryItemType[];
  onDeleteItem: () => void;
}

export default function InventoryItemsTable({
  inventoryItems,
}: InventoryItemsTableProps) {
  if (inventoryItems.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        No items found.
      </div>
    );
  }

  return (
    <>
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
          {inventoryItems.map((inventoryItem) => {
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
    </>
  );
}
