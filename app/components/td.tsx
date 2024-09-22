import React, { ReactNode } from 'react';

type TdProps = {
  children: ReactNode;
  className?: string;
};

const Td = (props: TdProps) => {
  const { children, className } = props;

  return <td className={`{$className} whitespace-nowrap`}>{children}</td>;
};

export default Td;
