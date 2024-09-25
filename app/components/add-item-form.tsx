'use client';
import { useFormState } from 'react-dom';

import Link from 'next/link';
import { Button } from '@/app/components/button';
import { quantitative_units } from '../lib/placeholder-data';
import { createInventoryItem } from '@/app/lib/actions';
import { useBackgroundQuery, useReadQuery } from '@apollo/client';
import { GetProductsDocument } from './inventory-table/documents.generated';

export default function AddItemForm(props: { userId: any }) {
  const [productQueryRef] = useBackgroundQuery(GetProductsDocument);
  const { data: productsData } = useReadQuery(productQueryRef);
  const { products } = productsData;
  const { userId } = props;
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createInventoryItem, initialState);

  if (!products || products.length < 1) {
    return null;
  }

  return (
    <form>
      <input type="hidden" value={userId} name="userId" />
      <div className="flex flex-row items-end gap-2 rounded-sm bg-coconut p-4 md:p-6">
        {/* Product Name */}
        <div className="w-1/4">
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
              {products.map((product) => (
                <option key={product?.id} value={product?.id}>
                  {product?.name}
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
        <div className="w-1/8">
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
        <div className="w-1/8">
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
        <div className="w-1/4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Expires
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
          className="w-1/8 flex h-10 items-center rounded-sm bg-jasmineRice px-4 text-sm font-medium text-blackBean transition-colors hover:bg-stainless hover:text-licorice"
        >
          Cancel
        </Link>
        <Button type="submit">Add Inventory Item</Button>
      </div>
    </form>
  );
}
