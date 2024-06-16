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
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-bloodorange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Add Inventory Item</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function IncrementInventoryItem({ id }: { id: string }) {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100">
      <PlusIcon className="w-5" />
    </button>
  );
}

export function DecrementInventoryItem({ id }: { id: string }) {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100">
      <MinusIcon className="w-5" />
    </button>
  );
}

export function DeleteInventoryItem({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
