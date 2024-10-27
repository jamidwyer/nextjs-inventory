import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  name: string;
}

export const Section = (props: SectionProps) => {
  const { children, name } = props;

  return (
    <div className="section mb-2 flex flex-col items-center gap-6 rounded-sm bg-coconut p-2">
      <h3 className="w-full self-start border-b pl-1">{name}</h3>
      {children}
    </div>
  );
};
