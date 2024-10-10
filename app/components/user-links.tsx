import { useReactiveVar } from '@apollo/client';
import { authenticatedVar } from '../apollo-client';
import { useRouter } from 'next/navigation';

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
      {authenticated ? (<form onSubmit={handleSubmit}>
        <button className="flex h-[36px] grow items-center justify-end gap-2 rounded-sm bg-coconut p-3 hover:bg-coconut hover:text-licorice md:flex-none md:justify-end md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>) :
        (<a href="/login">Sign in</a>)}
    </div>
  );
}
