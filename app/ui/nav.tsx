import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLinks from './nav-links';

export default function PageHeader() {
  const loggedIn = true;

  return (
    <nav className='flex flex-row'>
      {loggedIn ? (<NavLinks />)
        : (<Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-bloodorange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
        )}
    </nav>
  );
}
