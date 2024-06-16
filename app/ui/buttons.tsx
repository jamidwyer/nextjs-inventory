import {
  MinusIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export function AddInventoryItem() {
  return (
    <Link
      href="/inventory/items/create"
      className="flex h-10 items-center rounded-sm bg-bloodorange px-4 text-sm font-medium text-coconut transition-colors hover:bg-grapefruit hover:text-jasmineRice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grapefruit"
    >
      <span className="hidden md:block">Add Inventory Item</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function IncrementInventoryItem({ id }: { id: string }) {
  return (
    <button className="rounded-sm border p-2 hover:bg-stainless">
      <PlusIcon className="w-5" />
    </button>
  );
}

export function DecrementInventoryItem({ id }: { id: string }) {
  return (
    <button className="rounded-sm border p-2 hover:bg-stainless">
      <MinusIcon className="w-5" />
    </button>
  );
}

export function DeleteInventoryItem({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-sm border p-2 hover:bg-stainless">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
