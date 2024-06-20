import { notFound } from 'next/navigation';
import { fetchRecipeById } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipe',
  description: 'A recipe.',
};

export default async function Page({ params }: { params: { id: number } }) {
  const recipeId = params.id;
  const recipe = await fetchRecipeById(recipeId);
  if (!recipe) {
    notFound();
  }
  return (
    <main>
      {/* <h2>{recipe.name}</h2> */}
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      {recipe.instructions}
    </main>
  );
}
