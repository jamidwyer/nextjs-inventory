'use client';

import Link from 'next/link';
import { Button } from '@/app/components/button';
import { useBackgroundQuery, useMutation, useReadQuery } from '@apollo/client';
import {
  CreateInventoryItemDocument,
  GetProductsDocument,
  GetUnitsDocument,
} from './documents.generated';
import { useCallback, useState } from 'react';
import LinkButton from '../link-button';
import { useRouter } from 'next/navigation';

interface AddItemFormProps {
  onAddItem: () => void;
  userId?: string;
}

export default function AddItemForm(props: AddItemFormProps) {
  const { onAddItem, userId } = props;
  const router = useRouter();

  // TODO: should be number
  const [selectedProduct, setSelectedProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [productQueryRef] = useBackgroundQuery(GetProductsDocument);
  const [unitQueryRef] = useBackgroundQuery(GetUnitsDocument);
  const { data: productsData } = useReadQuery(productQueryRef);
  const { data: unitsData } = useReadQuery(unitQueryRef);
  const [createInventoryItem, { data, loading, error }] = useMutation(
    CreateInventoryItemDocument,
  );
  const { products } = productsData;
  const { units } = unitsData;

  const resetForm = useCallback(() => {
    setSelectedProduct('');
    setAmount('');
    setSelectedUnit('');
    setExpirationDate('');
  }, []);

  if (!products || products.length < 1) {
    return null;
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === '/product/add') {
      router.push(value);
    }
    setSelectedProduct(value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUnit(e.target.value);
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(e.target.value);
  };

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const variables = {
        id: parseInt(selectedProduct, 10),
        unitId: parseInt(selectedUnit, 10),
        quantity: parseInt(amount, 10),
        expirationDate: expirationDate,
        person: {
          id: userId,
        },
      };
      createInventoryItem({
        variables: variables,
        onCompleted: () => {
          onAddItem();
          resetForm();
        },
      });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <form onSubmit={handleAddItem}>
      <div className="flex flex-col items-center gap-2 rounded-sm bg-coconut">
        <div className="form-inputs flex flex-row gap-2">
          {/* Product Name */}
          <div className="w-1/2">
            <label htmlFor="product" className="mb-2 block text-sm font-medium">
              Choose product
            </label>
            <div className="relative">
              <select
                id="product"
                name="productId"
                className="peer block w-full cursor-pointer rounded-sm border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="product-error"
                onChange={handleProductChange}
                required
                value={selectedProduct}
              >
                <option value="" disabled>
                  Select a product
                </option>
                {products.map((product) => (
                  <option key={product?.id} value={product?.id}>
                    {product?.name}
                  </option>
                ))}
                <option value="/product/add">
                  <Link href="/product/add">(+) Add new product</Link>
                </option>
              </select>
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
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="peer block w-full rounded-sm border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Quantitative Unit */}
          {units && (
            <div className="w-1/4">
              <label
                htmlFor="product"
                className="mb-2 block text-sm font-medium"
              >
                Unit
              </label>
              <div className="relative">
                <select
                  id="unit"
                  name="unit"
                  className="peer block w-full cursor-pointer rounded-sm border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                  onChange={handleUnitChange}
                  value={selectedUnit}
                  required
                >
                  <option value="" disabled>
                    Select a unit
                  </option>
                  {units.map((unit) => (
                    <option key={unit?.id} value={unit?.id}>
                      {unit?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {/* Expiration Date */}
          <div className="w-1/8">
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
                  className="peer block w-full rounded-sm border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                  onChange={handleExpirationChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <LinkButton href="/inventory" variant="gray" className="w-1/4">
            Cancel
          </LinkButton>
          <Button className="w-3/4" loading={loading} type="submit">
            Add Inventory Item
          </Button>
        </div>
      </div>
    </form>
  );
}
