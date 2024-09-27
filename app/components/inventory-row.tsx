import React from 'react';
import { useMutation } from '@apollo/client';

// TODO: move FA logic to Icon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// TODO: fix
import { formatDateToLocal } from '@/app/lib/utils';

import Link from 'next/link';
import ItemActionButtons from '@/app/components/item-action-buttons';
import Td from '@/app/components/td';
import { UpdateItemQuantityDocument } from '@/app/components/inventory-table/documents.generated';
import { InventoryItemType } from '@/components/types.generated';
import { DeleteInventoryItemDocument } from './item-action-buttons/documents.generated';

const InventoryRow = (props: Omit<InventoryItemType, 'person'>) => {
  const { id, expirationDate, product, quantity, unit } = props;

  const [updateItemQuantity, { data, loading, error: updateError }] =
    useMutation(UpdateItemQuantityDocument);
  const url = `/products/${product.id}`;

  const [
    deleteInventoryItem,
    { data: deleteData, loading: deleteLoading, error: deleteError },
  ] = useMutation(DeleteInventoryItemDocument);

  return (
    <tr
      key={id}
      className="h-12 border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-sm [&:first-child>td:last-child]:rounded-tr-sm [&:last-child>td:first-child]:rounded-bl-sm [&:last-child>td:last-child]:rounded-br-sm"
    >
      <Td>
        <div className="flex items-center gap-2">
          <p>
            <Link
              className="flex flex-row items-center gap-1 text-bloodorange hover:text-smashedPumpkin"
              href={url}
            >
              {product.name} <FontAwesomeIcon icon={faLink} className="w-4" />
            </Link>
          </p>
        </div>
      </Td>
      <Td>{expirationDate}</Td>
      <Td>
        <ItemActionButtons
          id={id}
          quantity={quantity}
          unit={unit}
          updateItemQuantity={updateItemQuantity}
          deleteInventoryItem={deleteInventoryItem}
        />
      </Td>
    </tr>
  );
};

export default InventoryRow;
