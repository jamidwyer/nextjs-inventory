import { fetchRecipeById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: number } }) {
  const recipeId = params.id;
  const recipe = await fetchRecipeById(recipeId);
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
