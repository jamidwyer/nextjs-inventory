'use client';

import Search from '@/app/components/search';
import InventoryRow from '../inventory-row';
import Th from '../th';
import {
  InventoryItemType,
  InventoryItemTypeConnection,
  InventoryItemTypeEdge,
  PageInfo,
} from '@/components/types.generated';
import LoadMore from '../load-more';

interface InventoryItemsTableProps {
  inventoryItems: InventoryItemTypeConnection;
  onDeleteItem: () => void;
  loadMore: any;
  pageInfo: Omit<PageInfo, 'hasPreviousPage'>;
}

export default function InventoryItemsTable({
  inventoryItems,
  loadMore,
  pageInfo,
}: InventoryItemsTableProps) {
  if (inventoryItems.edges.length < 1) {
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
          {inventoryItems.edges.map((edge) => {
            if (!edge || !edge.node) {
              return null;
            }
            const { id, unit, product, quantity, expirationDate } = edge.node;
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
      {pageInfo.hasNextPage ? (
        <LoadMore
          loadMore={() => {
            return loadMore({
              variables: {
                cursor: pageInfo.endCursor,
              },
            });
          }}
          loading={false}
        />
      ) : null}
    </>
  );
}
