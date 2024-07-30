'use client';

import PageHeader from '@/app/ui/page-header';
import Nav from '@/app/ui/nav';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function PageUI(props: Props) {
  const { children } = props;

  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader />
      <Nav />
      <div className="p-6">
        <div className="flex grow flex-row">{children}</div>
      </div>
    </main>
  );
}
