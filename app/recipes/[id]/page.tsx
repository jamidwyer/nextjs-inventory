'use client';

//import { Metadata } from 'next';
import { GetRecipeDocument } from './documents.generated';
import { useQuery } from '@apollo/client';
import { IngredientType } from '@/components/types.generated';
import Error from '@/app/error';
import Loading from '@/app/loading';

// export const metadata: Metadata = {
//   title: 'Recipe',
//   description: 'A recipe.',
// };

export default function Page({ params }: { params: { id: string } }) {
  const recipeId = params.id;
  const { data, loading, error } = useQuery(GetRecipeDocument, {
    variables: {
      id: parseInt(recipeId, 10),
    },
    fetchPolicy: 'cache-first',
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  // @ts-ignore
  const { recipe } = data;
  const { name, ingredientSet, id, quantity, instructions } = recipe;

  return (
    <main>
      <h3>{name}</h3>
      <h4>Ingredients</h4>
      <ul>
        {ingredientSet.map((ingredient: IngredientType) => (
          <li key={ingredient.id}>
            {ingredient.quantity} {ingredient.unit.name} of{' '}
            {ingredient.product.name}
          </li>
        ))}
      </ul>
      <h4>Instructions</h4>
      {instructions}
    </main>
  );
}
