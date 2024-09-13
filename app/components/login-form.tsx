'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { authenticate } from '@/app/lib/actions';
import { TokenAuthDocument } from './user/documents.generated';
import { useMutation } from '@apollo/client';
import client from '../apollo-client';
import { useRouter } from 'next/navigation';
import { authenticatedVar } from '../apollo-client'

export default function LoginForm() {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [tokenAuth, { data, loading, error: updateError }] =
    useMutation(TokenAuthDocument);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    tokenAuth({
      variables: {
        ...data
      }
    });
    client.refetchQueries({ include: "active" });
    authenticatedVar(true);

    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full flex-1 rounded-sm bg-coconut p-8">
        <p className={`text-l mb-3`}>Please log in to continue.</p>
        <div className="w-full">
          <div className="w-full">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-licorice"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-sm border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-licorice" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-licorice"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-sm border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-licorice" />
            </div>
          </div>
        </div>
        <button type="submit" className="mt-4 w-full" aria-disabled={pending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-coconut" />
        </button>
      </div>
    </form>
  );
}
