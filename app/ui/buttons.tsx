import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Form from '@/app/ui/add-form';
import { fetchProducts } from '@/app/lib/data';

export async function AddInventoryItem({ userId }) {
  const products = await fetchProducts();

  return <Form userId={userId} products={products} />;
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
