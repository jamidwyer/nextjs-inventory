'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export default function Error({ error }: { error: unknown }) {
  useEffect(() => {
    // TODO: much, much better error handling
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full w-full items-center justify-center gap-2">
      <FontAwesomeIcon icon={faFire} className="w-4" />
      <h2 className="text-center">Something went wrong</h2>
      <Link
        href="/"
        className="rounded-sm bg-bloodorange px-4 py-2 text-sm text-coconut transition-colors hover:bg-smashedPumpkin"
      >
        Inventory
      </Link>
    </main>
  );
}
