import { render, screen, waitFor } from '@testing-library/react';
import InventoryTable from './index';

jest.mock('../inventory-row.tsx', () => () => (
  <tr>
    <td>inventory row mock</td>
  </tr>
));

describe('Inventory table', () => {
  it('renders no items if no items', async () => {
    const emptyMocks = {
      inventoryItems: {
        edges: [],
        pageInfo: {
          hasNextPage: false,
          endCursor: '',
        },
      },
    };

    render(<InventoryTable inventoryItems={emptyMocks.inventoryItems} />);

    await waitFor(() => {
      expect(screen.getByText('No items found.'));
    });
  });

  it('renders inventory data correctly', async () => {
    const mocks = {
      inventoryItems: {
        edges: [
          {
            node: {
              id: 1,
              quantity: 5,
              expirationDate: '2024-11-01',
              product: {
                id: 1,
                name: 'Papaya',
              },
              unit: {
                name: 'Each',
              },
            },
          },
        ],
      },
    };

    render(
      <InventoryTable
        inventoryItems={mocks.inventoryItems}
        pageInfo={{ hasNextPage: false, endCursor: '' }}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText('Product')).toBeInTheDocument();
      expect(screen.getByText('Expires')).toBeInTheDocument();
      expect(screen.getByText('Quantity')).toBeInTheDocument();
    });
  });
});
