'use client';

import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GetRecipesDocument } from './documents.generated';
import Loading from '@/app/components/loading';
import Error from '@/app/error';
import LinkButton from '@/app/components/link-button';

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
      <div className="flex flex-col items-center justify-center">
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
      <div className="justify-center4 flex flex-col items-center">
        No recipes found.
        <LinkButton href="/recipe/add/">Add Recipe</LinkButton>
      </div>
    );
  }

  return (
    <main>
      <ul>
        {data.recipes.edges.map((recipe) => {
          // @ts-ignore
          const { recipeId, name } = recipe?.node;
          const url = `/recipes/${recipeId}`;
          return (
            <li key={recipeId}>
              <Link
                prefetch
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
