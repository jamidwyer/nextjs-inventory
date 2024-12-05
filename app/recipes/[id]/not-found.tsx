import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <main className="flex h-full w-full items-center justify-center gap-2">
      <FontAwesomeIcon icon={faWineGlassEmpty} className="w-4" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested recipe.</p>
      <Link
        prefetch
        href="/"
        className="rounded-sm bg-bloodorange px-4 py-2 text-sm text-coconut transition-colors hover:bg-smashedPumpkin"
      >
        Inventory
      </Link>
    </main>
  );
}
