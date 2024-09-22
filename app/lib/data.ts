import { sql } from '@vercel/postgres';
import { InventoryItem, Product, User } from './definitions';

const ITEMS_PER_PAGE = 20;

export async function fetchInventoryItemsPages(
  userId: number,
  query: string,
  currentPage: number,
) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM inventory_items, products
    WHERE product_id = product_id AND user_id = ${userId} AND
    name ILIKE ${`%${query}%`};`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of inventory items.');
  }
}

export async function fetchRecipesByIngredient(id: number) {
  try {
    const data = await sql<Product>`SELECT
       *
      FROM recipes
      INNER JOIN recipes_to_ingredients
      ON recipes.id = recipes_to_ingredients.recipe_id
      WHERE recipes_to_ingredients.ingredient_id = ${id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch recipes.');
  }
}

export async function fetchRecipeById(id: number) {
  try {
    const recipe = await sql`select * from recipes_to_ingredients
    inner join recipes
    on recipes.id = recipes_to_ingredients.recipe_id
    inner join products
    on products.id = recipes_to_ingredients.ingredient_id
    where recipes.id= ${id}
;`;

    const recipeData = {
      ingredients: [],
      instructions: recipe.rows[0].instructions,
    };

    recipe.rows.map((row) => {
      // @ts-ignore # need to optimize query so this not needed
      recipeData.ingredients.push(row.name);
    });

    return recipeData;
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
    throw new Error('Failed to fetch recipe.');
  }
}
