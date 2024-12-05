import React from 'react';
import { Button } from '../button';

interface LoadMoreProps {
  loading: boolean;
  loadMore: () => void;
}

const LoadMore = ({ loading, loadMore }: LoadMoreProps) => {
  return (
    <Button loading={loading} onClick={loadMore}>
      Load More
    </Button>
  );
};

export default LoadMore;
