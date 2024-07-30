import { ApolloWrapper } from './ApolloWrapper';
import '@/app/ui/global.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hord.tech'),
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
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
