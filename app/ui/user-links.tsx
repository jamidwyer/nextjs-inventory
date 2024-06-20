import { signOut } from '@/auth';

export default function UserLinks() {
  return (
    <div className="flex items-center gap-4">
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="flex h-[36px] grow items-center justify-end gap-2 rounded-sm bg-coconut p-3 hover:bg-coconut hover:text-licorice md:flex-none md:justify-end md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
      <a href="/login">Sign in</a>
    </div>
  );
}
