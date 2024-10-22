'use client';

import '@/public/global.css';
import PageHeader from '@/app/components/page-header';
import Nav from '@/app/components/nav';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import AuthGuard from './components/auth-guard';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <PageHeader />
          <Nav />
          <main className="w-full flex-col items-center justify-center">
            <div className="p-6">
              <div className="flex-row">{children}</div>
            </div>
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
