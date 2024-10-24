import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  name: string;
}

export const Section = (props: SectionProps) => {
  const { children, name } = props;

  return (
    <div className="m-2 flex flex-col items-center gap-6 rounded-sm bg-coconut p-2">
      <h3 className="border-b-1 w-full self-start pl-4">{name}</h3>
      {children}
    </div>
  );
};
