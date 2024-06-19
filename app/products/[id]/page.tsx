import { fetchRecipesByIngredient } from '@/app/lib/data';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: number } }) {
  const productId = params.id;
  const recipes = await fetchRecipesByIngredient(productId);
  return (
    <main>
      <ul>
        {recipes.map((recipe) => {
          const url = `/recipes/${recipe.id}`;
          return (
            <li key={recipe.id}>
              <Link href={url}>{recipe.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
