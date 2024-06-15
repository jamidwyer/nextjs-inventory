import '@/app/ui/global.css';
import PageHeader from '@/app/ui/page-header';
import Nav from '@/app/ui/nav';


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
          <div className='p-6'>
            <div className="mt-4 flex grow flex-col md:flex-row">
              {children}
            </div>
          </div>
        </main>

      </body>
    </html>
  );
}
