import { render, screen, waitFor } from '@testing-library/react';
import ItemActionButtons from '../item-action-buttons';

jest.mock('../item-action-buttons/index.tsx', () => () => (
  <button>mock button</button>
));

describe('Add item form', () => {
  it('renders the item form', async () => {
    render(<ItemActionButtons></ItemActionButtons>);

    await waitFor(() => {
      expect(screen.getByText('mock button')).toBeInTheDocument();
    });
  });
});
