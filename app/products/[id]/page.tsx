'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { useQuery } from '@apollo/client';
import { GetRecipesDocument } from './documents.generated';
import Loading from '@/app/loading';
import Error from '@/app/error';

// export const metadata: Metadata = {
//   title: 'Ingredient',
//   description: 'Recipes by ingredient.',
// };

export default function Page({ params }: { params: { id: string } }) {
  const productId = params?.id;

  const { data, loading, error } = useQuery(GetRecipesDocument, {
    variables: {
      id: params.id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  // TODO: move weird no data but no error cases (they happen) to error component
  if (!data || !data.recipes) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-grapefruit">
          Unable to load recipes. Please try again later.
        </p>
        <Error
          error={{
            name: 'Recipes Error',
            message: `Recipes data for ${params.id} is not available.`,
          }}
        />
      </div>
    );
  }

  if (data.recipes.edges.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        No items found.
      </div>
    );
  }

  return (
    <main>
      <ul>
        {data.recipes.edges.map((recipe) => {
          // @ts-ignore
          const { id, name } = recipe?.node;
          const url = `/recipes/${id}`;
          return (
            <li key={id}>
              <Link
                href={url}
                className="items-center justify-center border text-bloodorange hover:text-smashedPumpkin"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
