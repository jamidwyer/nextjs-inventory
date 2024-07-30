'use client';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { updateInventoryItem, deleteInventoryItem } from '@/app/lib/actions';

type Props = {
  id?: string;
  amount?: number;
};

export default function InventoryItemButtons(props: Props) {
  const { id, amount: initialAmount } = props;
  const [amount, setAmount] = useState(initialAmount);
  if (!id) {
    return null;
  }

  return (
    <div className="flex justify-end gap-2">
      <button
        onClick={async () => {
          // const updatedAmount = await updateInventoryItem(id, amount + 1);
          // setAmount(amount + 1);
        }}
        className="rounded-sm border p-2 hover:bg-stainless"
      >
        <PlusIcon className="w-5" />
      </button>
      <button
        onClick={async () => {
          // const updatedAmount = await updateInventoryItem(id, amount - 1);
          // setAmount(amount - 1);
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
