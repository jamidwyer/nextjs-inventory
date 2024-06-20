'use client';
import { useFormState } from 'react-dom';

import { Product } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { quantitative_units } from '../lib/placeholder-data';
import { createInventoryItem } from '@/app/lib/actions';

type Props = {
  userId: number;
  products: Product[];
};

export default function AddItemForm(props: Props) {
  const { userId, products } = props;
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createInventoryItem, initialState);
  return (
    <form action={dispatch}>
      <input type="hidden" value={userId} name="userId" />
      <div className="flex flex-row items-end gap-2 rounded-sm bg-coconut p-4 md:p-6">
        {/* Product Name */}
        <div>
          <label htmlFor="product" className="mb-2 block text-sm font-medium">
            Choose product
          </label>
          <div className="relative">
            <select
              id="product"
              name="productId"
              className="peer block w-full cursor-pointer rounded-sm border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="product-error"
            >
              <option value="" disabled>
                Select a product
              </option>
              {products.map((product: Product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.productId &&
              state.errors.productId.map((error: string) => (
                <p className="mt-2 text-sm text-wildWatermelon" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Inventory Amount */}
        <div>
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Amount
          </label>
          <div className="relative mt-2 rounded-sm">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
                className="peer block w-full rounded-sm border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Quantitative Unit */}
        <div>
          <label htmlFor="product" className="mb-2 block text-sm font-medium">
            Unit
          </label>
          <div className="relative">
            <select
              id="unit"
              name="unit"
              className="peer block w-full cursor-pointer rounded-sm border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a unit
              </option>
              {quantitative_units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Expiration Date */}
        <div>
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Expiration Date
          </label>
          <div className="relative mt-2 rounded-sm">
            <div className="relative">
              <input
                id="amount"
                name="expirationDate"
                type="date"
                placeholder="Enter expiration date"
                className="peer block w-full rounded-sm border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <Link
          href="/inventory"
          className="flex h-10 items-center rounded-sm bg-stainless px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Inventory Item</Button>
      </div>
    </form>
  );
}
