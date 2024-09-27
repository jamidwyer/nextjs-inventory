import React from 'react';
import { Button } from './button';

interface LoadMoreProps {
  loading: boolean;
  loadMore: () => void;
}

const LoadMore = (props: LoadMoreProps) => {
  const { loading, loadMore } = props;

  return <Button onClick={loadMore}>Load More</Button>;
};

export default LoadMore;
