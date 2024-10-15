import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLinks from './nav-links';
import LinkButton from './link-button';

export default function PageHeader() {
  const loggedIn = true;

  return (
    <nav className="flex flex-row">
      {loggedIn ? (
        <NavLinks />
      ) : (
        <LinkButton
          href="/login"
          className="gap-2 self-start rounded-sm bg-bloodorange"
        >
          <span className="w-1/2">
            Log in <ArrowRightIcon className="w-1/8" />
          </span>
        </LinkButton>
      )}
    </nav>
  );
}
