import { useReactiveVar } from '@apollo/client';
import { authenticatedVar } from '../apollo-client';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export default function UserLinks() {
  const authenticated = useReactiveVar(authenticatedVar);
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    authenticatedVar(false);

    router.push('/');
  };

  return (
    <div className="flex items-center gap-4">
      {authenticated ? (
        <form onSubmit={handleSubmit}>
          <Button variant="gray" className="h-[36px] md:px-3">
            <div className="hidden md:block">Log out</div>
          </Button>
        </form>
      ) : (
        <a href="/login">Log in</a>
      )}
    </div>
  );
}
