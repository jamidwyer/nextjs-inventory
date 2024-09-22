import React, { ReactNode } from 'react';

type ThProps = {
  children: ReactNode;
  className: string;
};

const Th = (props: ThProps) => {
  const { children, className } = props;

  return (
    <th scope="col" className={`font-medium ${className}`}>
      {children}
    </th>
  );
};

export default Th;
