// @ts-nocheck
'use client';

import { ReactNode } from 'react';
import { useReadQuery, useBackgroundQuery } from '@apollo/client';
import { ViewerDocument } from './user/documents.generated';

interface AuthGuardProps {
  children: ReactNode;
  excludedRoutes?: string[];
}

const AuthGuard = ({ children, excludedRoutes }: AuthGuardProps) => {
  const [viewerQueryRef] = useBackgroundQuery(ViewerDocument);
  const { data: viewer, error } = useReadQuery(viewerQueryRef);
  console.log(viewer);
  return <>{children}</>;
};

export default AuthGuard;
