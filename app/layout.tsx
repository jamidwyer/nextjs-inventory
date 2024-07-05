import '@/app/ui/global.css';
import PageHeader from '@/app/ui/page-header';
import Nav from '@/app/ui/nav';

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hord.dev'),
  title: {
    template: '%s | Hord',
    default: 'Inventory | Hord',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">
          <PageHeader />
          <Nav />
          <div className="p-6">
            <div className="flex grow flex-row">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
