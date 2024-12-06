import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import client from '../apollo-client';
import { useRouter } from 'next/navigation';
import { Button } from './button';
import { LogoutDocument, MeDocument } from './user/documents.generated';
import { useEffect, useState } from 'react';
import LinkButton from './link-button';

export default function UserLinks() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const [logout, { data: authData, loading, error }] =
    useMutation(LogoutDocument);

  const { data, loading: userLoading, error: userError } = useQuery(MeDocument);

  // TODO: hook
  useEffect(() => {
    if (!loading && data?.me?.id) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loading, data]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      logout({
        onCompleted: (resp) => {
          if (resp?.logout?.success) {
            client.refetchQueries({ include: 'active' });
            setLoggedIn(false);
            router.push('/');
          } else {
            console.log('Logout failed');
            setLoggedIn(false);
            router.push('/login');
          }
        },
      });
    } catch (e) {
      setLoggedIn(false);
      router.push('/login');
    }

    router.push('/');
  };

  return (
    <div className="flex items-center">
      {loggedIn ? (
        <form onSubmit={handleSubmit}>
          <Button loading={loading} variant="gray" className="h-[36px] md:px-3">
            Log out
          </Button>
        </form>
      ) : (
        <LinkButton
          href="/login"
          loading={loading}
          variant="gray"
          className="h-[36px] md:px-3"
        >
          Log in
        </LinkButton>
      )}
    </div>
  );
}
