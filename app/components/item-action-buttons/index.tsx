'use client';

// TODO: fontawesome
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { UpdateItemQuantityMutationVariables } from '../inventory-table/documents.generated';
import { DeleteInventoryItemMutationVariables } from './documents.generated';
import { Reference } from '@apollo/client';
import { Button } from '../button';

// TODO: id and quantity should be non-null numbers
type Props = {
  id?: string;
  quantity?: number;
  updateItemQuantity: ({
    variables,
  }: {
    variables: UpdateItemQuantityMutationVariables;
  }) => void;
  deleteInventoryItem: ({
    variables,
  }: {
    variables: DeleteInventoryItemMutationVariables;
  }) => void;
  unit?: {
    name: string;
  };
};

export default function InventoryItemButtons(props: Props) {
  const {
    id,
    quantity = 0,
    updateItemQuantity,
    unit,
    deleteInventoryItem,
  } = props;
  if (!id || !quantity) {
    return null;
  }

  const handleChangeQuantity = (quantity: number) => {
    updateItemQuantity({
      variables: {
        id: id,
        quantity: quantity,
      },
    });
  };

  const handleDeleteItem = (id: string) => {
    deleteInventoryItem({
      variables: { id: id },
      // @ts-ignore
      update: (
        cache: {
          modify: (args: {
            fields: {
              inventoryItems(
                itemRefs: Reference[],
                { readField }: { readField: any },
              ): Reference[];
            };
          }) => void;
        },
        result: { data: { deleteInventoryItem: any } },
      ) => {
        if (id) {
          cache.modify({
            fields: {
              inventoryItems(itemRefs, { readField }) {
                return {
                  ...itemRefs,
                  // @ts-ignore
                  edges: itemRefs.edges.filter((edge) => {
                    return readField('id', edge.node) !== id;
                  }),
                };
              },
            },
          });
        }
      },
    });
  };

  return (
    <div className="flex items-center justify-start gap-2">
      <Button
        onClick={async () => {
          handleChangeQuantity(quantity + 1);
        }}
        variant="icon"
      >
        <PlusIcon className="w-5" />
      </Button>
      <div className="line-clamp-1 flex w-32 justify-center">
        {quantity} {unit?.name}
      </div>
      <Button
        variant="icon"
        onClick={async () => {
          await handleChangeQuantity(quantity >= 1 ? quantity - 1 : 0);
        }}
        className="rounded-sm border p-2 hover:bg-stainless"
      >
        <MinusIcon className="w-5" />
      </Button>
      <Button
        variant="icon"
        onClick={async () => {
          handleDeleteItem(id);
        }}
        className="rounded-sm border p-2 hover:bg-stainless"
      >
        <TrashIcon className="w-5" />
      </Button>
    </div>
  );
}
