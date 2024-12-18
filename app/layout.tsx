'use client';

import '@/public/global.css';
import PageHeader from '@/app/components/page-header';
import Nav from '@/app/components/nav';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>hord</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ApolloProvider client={client}>
          <PageHeader />
          <Nav />
          <main className="table-container w-full flex-col items-center justify-center p-6">
            <div className="flex-row">{children}</div>
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
