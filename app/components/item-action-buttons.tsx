'use client';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { UpdateItemQuantityMutationVariables } from './inventory-table/documents.generated';

// TODO: id and quantity should be non-null numbers
type Props = {
  id?: string;
  quantity?: number;
  updateItemQuantity: ({
    variables,
  }: {
    variables: UpdateItemQuantityMutationVariables;
  }) => void;
  unit?: {
    name: string;
  };
};

export default function InventoryItemButtons(props: Props) {
  const { id, quantity = 0, updateItemQuantity, unit } = props;
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

  return (
    <div className="flex items-center justify-start gap-2">
      <button
        onClick={async () => {
          handleChangeQuantity(quantity + 1);
        }}
        className="rounded-sm border p-2 hover:bg-stainless"
      >
        <PlusIcon className="w-5" />
      </button>
      <div className="line-clamp-1 flex w-32 justify-center">
        {quantity} {unit?.name}
      </div>
      <button
        onClick={async () => {
          await handleChangeQuantity(quantity >= 1 ? quantity - 1 : 0);
        }}
        className="rounded-sm border p-2 hover:bg-stainless"
      >
        <MinusIcon className="w-5" />
      </button>
      <button
        onClick={async () => {
          // const deletedAmount = await deleteInventoryItem(id);
          // setAmount(amount - 1);
        }}
        className="rounded-sm border p-2 hover:bg-stainless"
      >
        <TrashIcon className="w-5" />
      </button>
    </div>
  );
}
