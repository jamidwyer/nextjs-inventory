import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoadMore from './index';

describe('Load more', () => {
  it('fires load more on click', () => {
    const loadMoreMock = jest.fn();

    render(<LoadMore loading={false} loadMore={loadMoreMock} />);
    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);

    expect(loadMoreMock).toHaveBeenCalledTimes(1);
  });
});
