'use client';

import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GetRecipesDocument } from './documents.generated';
import Loading from '@/app/components/loading';
import Error from '@/app/error';
import LinkButton from '@/app/components/link-button';
import { Section } from '@/app/components/section';

export default function Page({
  params,
}: {
  params: { id: string; name: string };
}) {
  const productId = params?.id;
  let searchParams = new URLSearchParams(document.location.search);
  const productName = searchParams.get('name');

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

  const name = `Recipes for ${productName}`;
  return (
    <Section name={name}>
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
      <LinkButton className="mt-4 lg:w-1/4" href="/recipe/add/">
        Add Recipe
      </LinkButton>
    </Section>
  );
}
