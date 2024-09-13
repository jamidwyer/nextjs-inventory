import { ReactNode, useEffect } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { ViewerDocument } from './user/documents.generated';
import { usePathname, useRouter } from 'next/navigation';
import client, { authenticatedVar } from '../apollo-client';

interface AuthGuardProps {
  children: ReactNode;
  excludedRoutes?: string[];
}

const AuthGuard = ({ children, excludedRoutes }: AuthGuardProps) => {
  const { data: viewer, error, refetch } = useQuery(ViewerDocument);
  const authenticated = useReactiveVar(authenticatedVar);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!excludedRoutes?.includes(pathname)) {
      refetch();
    }
  }, [pathname])

  useEffect(() => {
    if (!authenticated && !excludedRoutes?.includes(pathname)) {
      router.push('/login');
      client.resetStore();
    }
  }, [authenticated, router])

  return (
    <>
      {
        excludedRoutes?.includes(pathname) ?
          ( children ) : (<>{viewer && children}</>)
      }
    </>
  )
};

export default AuthGuard;
