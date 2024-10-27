'use client';

import Link from 'next/link';
import { Button } from '@/app/components/button';
import { useBackgroundQuery, useMutation, useReadQuery } from '@apollo/client';
import {
  CreateInventoryItemDocument,
  GetProductsDocument,
  GetUnitsDocument,
} from './documents.generated';
import { useState } from 'react';
import LinkButton from '../link-button';

interface AddItemFormProps {
  onAddItem: () => void;
  userId?: string;
}

export default function AddItemForm(props: AddItemFormProps) {
  const { onAddItem, userId } = props;
  // TODO: should be number
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');
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

  if (!products || products.length < 1) {
    return null;
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProduct(e.target.value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value);
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(e.target.value);
  };

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const variables = {
        id: parseInt(product, 10),
        unitId: parseInt(unit, 10),
        quantity: parseInt(amount, 10),
        expirationDate: expirationDate,
        person: {
          id: 1,
        },
      };
      createInventoryItem({
        variables: variables,
        onCompleted: () => {
          onAddItem();
          setProduct('');
          setAmount('');
          setUnit('');
          setExpirationDate('');
        },
      });
    } catch (error) {
      // TODO: Log the error.
    }
  };

  return (
    <form onSubmit={handleAddItem}>
      <input type="hidden" value={userId} name="userId" />
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
                defaultValue=""
                aria-describedby="product-error"
                onChange={handleProductChange}
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
                  defaultValue=""
                  onChange={handleUnitChange}
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
          <Button className="w-3/4" type="submit">
            Add Inventory Item
          </Button>
        </div>
      </div>
    </form>
  );
}
